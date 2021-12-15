// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from "react";

import { DataResolution, MarketDataSelector, TimeSelector } from "common/enums";
import { useGlobalStore } from "data/store";

import {
	MarketSummaryData,
	MarketSummaryDataDict,
	ProtocolSummaryData,
	ProtocolHistoricalData,
	MarketHistoricalData,
	MarketHistoricalDataEntry,
} from "common/types";
import { requestProtocolSummaryData } from "data/requests/protocolSummaryData";
import { requestProtocolHistoricalData } from "data/requests/protocolHistoricalData";
import { requestMarketSummaryData } from "data/requests/marketSummaryData";
import { requestMarketHistoricalData } from "data/requests/marketHistoricalData";
import { DATA_BEHIND_TIME_THRESHOLD_S, TIME_SELECTOR_INFO } from "common/constants";
import { Token } from "graphql";

export function useProtocolSummaryData(): ProtocolSummaryData {
	const [store, { updateStore }] = useGlobalStore();
	const key = "protocolSummaryData";
	const data = store[key];

	useEffect(() => {
		async function checkForData() {
			// Fetch the data if it hasn't been fetched already
			if (!data) {
				const data = await requestProtocolSummaryData();
				updateStore(key, data);
			}
		}

		checkForData();
	}, [data, updateStore]);

	return data;
}

export function useProtocolHistoricalData(): ProtocolHistoricalData[] {
	const [store, { updateStore }] = useGlobalStore();
	const key = "protocolHistoricalData";
	const data = store[key];

	useEffect(() => {
		async function checkForData() {
			// Fetch the data if it hasn't been fetched already
			if (!data) {
				const data = await requestProtocolHistoricalData();
				updateStore(key, data);
			}
		}

		checkForData();
	}, [data, updateStore]);

	return data;
}

/**
 * Hook to get market summary data for a token, or all tokens if no underlyingToken is passed
 * @param token the underlying token of the market the summary data is wanted for
 * @returns summary data for the market with the underlyingToken or undefined if there is not data for that token
 * 			if no underlyingToken is specified, a list of all marketSummaryData is returned
 */
export function useMarketSummaryData(underlyingToken?: Token): MarketSummaryData | undefined | MarketSummaryData[] {
	const [store, { updateStore }] = useGlobalStore();
	const key = "marketSummaryData";
	let data = store[key];

	useEffect(() => {
		async function checkForData() {
			// Fetch the data if it hasn't been fetched already
			if (!data) {
				const allSummaryData = await requestMarketSummaryData();
				updateStore(key, allSummaryData);
			}
		}

		checkForData();
	}, [data, updateStore]);

	if (data && !!underlyingToken) {
		data = data.filter((entry) => entry.underlyingSymbol == underlyingToken);
		if (data.length === 0) {
			return undefined;
		} else {
			return data[0];
		}
	}

	return data;
}

/**
 * Hook to get historical market data for the time and data selected
 * @param timeSelector time frame to get the data for, the resolution is derived from this
 * @param dataSelector data type to get the data for
 * @returns market historical data for the time frame (and corresponding resoltuion), and data type selected
 */
export function useMarketHistoricalData(
	timeSelector: TimeSelector,
	dataSelector: MarketDataSelector
): Record<Token, number>[] {
	const [store, { updateStore }] = useGlobalStore();
	const key = "marketHistoricalData";
	const data = store[key];

	useEffect(() => {
		async function checkForData() {
			// Fetch the data if it hasn't been fetched already
			if (!data) {
				const data = await requestMarketHistoricalData();
				updateStore(key, data);
			}
		}

		checkForData();
	}, [data, updateStore]);

	let queriedData = [];
	if (data) {
		// Get the correct resolution
		const resolution = TIME_SELECTOR_INFO[timeSelector].resolution;
		queriedData = data[resolution];

		// Get the correct data type
		queriedData = queriedData.map((entry) => entry[dataSelector]);

		// Filter on time
		const days = TIME_SELECTOR_INFO[timeSelector].days;

		// undefined if ALL so don't filter if thats the case
		if (days) {
			const filterSecs = days * 24 * 60 * 60;
			const nowSec = parseInt(new Date() / 1000);
			const cutoffSecs = nowSec - filterSecs;
			queriedData = queriedData.filter((entry) => {
				return entry.date > cutoffSecs;
			});
		}
	}

	return queriedData;
}

export function useDataStatus(): { dataError: boolean; lastSyncedDate: number } {
	const [store, { _ }] = useGlobalStore();
	const marketHistoricalDataKey = "marketHistoricalData";
	const marketHistoricalData = store[marketHistoricalDataKey];
	let dataMissing = false;
	let dataBehind = false;
	let lastSyncedDate = 0;

	if (!!marketHistoricalData) {
		const weekData = marketHistoricalData[DataResolution.WEEK];
		const dayData = marketHistoricalData[DataResolution.DAY];
		const hourData = marketHistoricalData[DataResolution.HOUR];

		dataMissing = weekData.length === 0 || dayData.length === 0 || hourData.length === 0;

		const weekLatestDate = weekData.length > 0 ? weekData[weekData.length - 1].supplyApy.date : 0;
		const dayLatestDate = dayData.length > 0 ? dayData[dayData.length - 1].supplyApy.date : 0;
		const hourLatestDate = hourData.length > 0 ? hourData[hourData.length - 1].supplyApy.date : 0;

		lastSyncedDate = Math.max(weekLatestDate, dayLatestDate, hourLatestDate);

		const now = new Date() / 1000; // in sec since unix epoche
		if (DATA_BEHIND_TIME_THRESHOLD_S < now - lastSyncedDate) {
			dataBehind = true;
		}
	}

	return { dataError: dataMissing || dataBehind, lastSyncedDate: lastSyncedDate };
}
