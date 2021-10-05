import batSvg from "assets/coins/BAT.svg";
import compSvg from "assets/coins/COMP.svg";
import daiSvg from "assets/coins/DAI.svg";
import ethSvg from "assets/coins/ETH.svg";
import uniSvg from "assets/coins/UNI.svg";
import zrxSvg from "assets/coins/ZRX.svg";
import usdcSvg from "assets/coins/USDC.svg";
import usdtSvg from "assets/coins/USDT.svg";
import wbtcSvg from "assets/coins/WBTC.svg";
import aaveSvg from "assets/coins/AAVE.svg";
import mkrSvg from "assets/coins/MKR.svg";
import sushiSvg from "assets/coins/SUSHI.svg";
import tusdSvg from "assets/coins/TUSD.svg";
import yfiSvg from "assets/coins/YFI.svg";
import linkSvg from "assets/coins/LINK.svg";

import { coin_E, time_selector_E, time_series_data_selector_E } from "common/enums";
import { coin_info_S, time_selector_info_S, time_series_data_selector_info_S } from "common/interfaces";

export const COIN_INFO: coin_info_S[] = [];
COIN_INFO[coin_E.BAT] = {
	name: "BAT",
	imgSrc: batSvg,
	desc: `Basic Attention Token (BAT) is a token that powers Brave's blockchain-based digital
	advertising platform.`,
	whitepaper: "https://basicattentiontoken.org/static-assets/documents/BasicAttentionTokenWhitePaper-4.pdf",
	website: "https://basicattentiontoken.org/",
	twitter: "https://twitter.com/attentiontoken",
	coingecko: "https://www.coingecko.com/coins/basic-attention-token",
};
COIN_INFO[coin_E.COMP] = {
	name: "COMP",
	imgSrc: compSvg,
	desc: `Compound (COMP) is a token that enables community governance of the
	Compound protocol. COMP token holders and their delegates can also debate,
	propose, and vote on changes to the protocol.`,
	whitepaper: "https://compound.finance/documents/Compound.Whitepaper.pdf",
	website: "https://compound.finance/",
	twitter: "https://twitter.com/compoundfinance",
	coingecko: "https://www.coingecko.com/coins/compound",
};
COIN_INFO[coin_E.DAI] = {
	name: "DAI",
	imgSrc: daiSvg,
	desc: `Dai (DAI) is a decentralized stablecoin that attempts to maintain a
	value of $1.00 USD. Unlike centralized stablecoins, Dai isn't backed by US
	dollars in a bank account. Instead, it’s backed by collateral on the Maker
	platform.`,
	whitepaper: "https://makerdao.com/en/whitepaper/#abstract",
	website: "https://makerdao.com",
	twitter: "https://twitter.com/MakerDAO",
	coingecko: "https://www.coingecko.com/coins/dai",
};
COIN_INFO[coin_E.ETH] = {
	name: "ETH",
	imgSrc: ethSvg,
	desc: `Ethereum is a decentralized computing platform that uses ETH
	(also called Ether) to pay transaction fees (or “gas”). Developers can use
	Ethereum to run decentralized applications (like Compound) and issue new
	crypto assets, known as Ethereum tokens (ERC-20).`,
	whitepaper: "https://ethereum.org/whitepaper/",
	website: "https://ethereum.org",
	twitter: "https://twitter.com/ethereum",
	coingecko: "https://www.coingecko.com/coins/ethereum",
};
COIN_INFO[coin_E.UNI] = {
	name: "UNI",
	imgSrc: uniSvg,
	desc: `Uniswap (UNI) is a token that powers governance on Uniswap, an
	automated liquidity provider that’s designed to make it easy to exchange
	Ethereum (ERC-20) tokens.`,
	whitepaper: "https://uniswap.org/whitepaper-v3.pdf",
	website: "http://uniswap.org/",
	twitter: "https://twitter.com/Uniswap",
	coingecko: "https://www.coingecko.com/coins/uniswap",
};
COIN_INFO[coin_E.ZRX] = {
	name: "ZRX",
	imgSrc: zrxSvg,
	desc: `ZRX is a token that is used to power the 0x protocol.
	The protocol itself is designed to allow Ethereum tokens to be traded at a
	low cost directly from your wallet.`,
	whitepaper: "https://0x.org/pdfs/0x_white_paper.pdf",
	website: "https://0x.org/",
	twitter: "https://twitter.com/0xProject",
	coingecko: "https://www.coingecko.com/coins/0x",
};
COIN_INFO[coin_E.USDC] = {
	name: "USDC",
	imgSrc: usdcSvg,
	desc: `USD Coin (USDC) is a stablecoin fully backed by the US dollar and
	developed by the CENTRE consortium. USDC can be exchanged for dollars
	1:1 on Coinbase and other exchanges.`,
	whitepaper: "https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf",
	website: "https://www.circle.com/usdc",
	twitter: "https://twitter.com/circlepay",
	coingecko: "https://www.coingecko.com/coins/usd-coin",
};
COIN_INFO[coin_E.USDT] = {
	name: "USDT",
	imgSrc: usdtSvg,
	desc: `Tether (USDT) is a stablecoin that is pegged to the value of a U.S.
	dollar. Tether’s issuer claims that USDT is backed by bank reserves and
	loans which match or exceed the value of USDT in circulation.`,
	whitepaper: "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf",
	website: "https://tether.to/",
	twitter: "https://twitter.com/Tether_to",
	coingecko: "https://www.coingecko.com/en/coins/tether",
};
COIN_INFO[coin_E.WBTC] = {
	name: "WBTC",
	imgSrc: wbtcSvg,
	desc: `Wrapped Bitcoin (WBTC) is an Ethereum token that is intended to 
	represent Bitcoin (BTC) on the Ethereum blockchain. This version of WBTC on 
	Compound is no longer being supported, with the community migrating 
	to WBTC2.`,
	whitepaper: "https://wbtc.network/assets/wrapped-tokens-whitepaper.pdf",
	website: "https://wbtc.network/",
	twitter: "https://twitter.com/wrappedbtc",
	coingecko: "https://www.coingecko.com/coins/wrapped-bitcoin",
};
COIN_INFO[coin_E.WBTC2] = {
	name: "WBTC2",
	imgSrc: wbtcSvg,
	desc: `Wrapped Bitcoin (WBTC2) is an Ethereum token that is intended to 
	represent Bitcoin (BTC) on the Ethereum blockchain. 
	This version of WBTC is still being actively supported on Compound.`,
	whitepaper: "https://wbtc.network/assets/wrapped-tokens-whitepaper.pdf",
	website: "https://wbtc.network",
	twitter: "https://twitter.com/wrappedbtc",
	coingecko: "https://www.coingecko.com/coins/wrapped-bitcoin",
};
COIN_INFO[coin_E.AAVE] = {
	name: "AAVE",
	imgSrc: aaveSvg,
	desc: "Aave (AAVE) is an Ethereum token that powers Aave, a decentralized non-custodial money market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow cryptocurrencies in exchange for paying a variable interest rate.",
	whitepaper: "https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf",
	website: "https://aave.com",
	twitter: "https://twitter.com/AaveAave",
	coingecko: "https://www.coingecko.com/coins/aave",
};
COIN_INFO[coin_E.LINK] = {
	name: "LINK",
	imgSrc: linkSvg,
	desc: `Chainlink (LINK) is an Ethereum token that powers the Chainlink decentralized oracle network. This network allows smart contracts on Ethereum to securely connect to external data sources, APIs, and payment systems.`,
	whitepaper: "https://chain.link/whitepaper",
	website: "https://chain.link",
	twitter: "https://twitter.com/chainlink",
	coingecko: "https://www.coingecko.com/coins/chainlink",
};
COIN_INFO[coin_E.MKR] = {
	name: "MKR",
	imgSrc: mkrSvg,
	desc: `Maker is an Ethereum token that describes itself as “a utility token, governance token, and recapitalization resource of the Maker system.” The purpose of the Maker system is to generate another Ethereum token, called Dai, that seeks to trade on exchanges at a value of exactly US$1.00.`,
	whitepaper: "https://makerdao.com/whitepaper/",
	website: "https://makerdao.com/",
	twitter: "https://twitter.com/MakerDAO",
	coingecko: "https://www.coingecko.com/coins/maker",
};
COIN_INFO[coin_E.SUSHI] = {
	name: "SUSHI",
	imgSrc: sushiSvg,
	desc: `SushiSwap (SUSHI) is an Ethereum token that powers SushiSwap, a decentralized cryptocurrency exchange and automated market maker built on Ethereum. Holders of SUSHI can participate in community governance and stake their tokens to receive a portion of SushiSwap’s transaction fees.`,
	whitepaper: "https://docs.sushi.com",
	website: "https://sushi.com",
	twitter: "https://twitter.com/sushiswap",
	coingecko: "https://www.coingecko.com/coins/sushi",
};
COIN_INFO[coin_E.TUSD] = {
	name: "TUSD",
	imgSrc: tusdSvg,
	desc: `TrueUSD is a stablecoin running on Ethereum that attempts to maintain a value of US$1.00. The supply of TUSD is collateralized by US dollars held in escrow by banks. Tokens can be purchased and redeemed for US dollars on the TrustToken website.`,
	whitepaper: "https://www.trusttoken.com",
	website: "https://www.trusttoken.com",
	twitter: "https://twitter.com/TrustToken",
	coingecko: "https://www.coingecko.com/coins/true-usd",
};
COIN_INFO[coin_E.YFI] = {
	name: "YFI",
	imgSrc: yfiSvg,
	desc: `Yearn.finance (YFI) is an Ethereum token that governs the Yearn.finance platform. The platform is a yield optimizer that moves funds around the decentralized finance (“defi”) ecosystem in an effort to generate a high return.`,
	whitepaper: "https://docs.yearn.finance",
	website: "https://yearn.finance",
	twitter: "https://twitter.com/iearnfinance",
	coingecko: "https://www.coingecko.com/coins/yearn-finance",
};

//// General chart config
// Used for chart buttons and data
export const TIME_SELECTOR_INFO: time_selector_info_S[] = [];
TIME_SELECTOR_INFO[time_selector_E.ONE_DAY] = {
	name: "1D",
	days: 1,
};
TIME_SELECTOR_INFO[time_selector_E.ONE_WEEK] = {
	name: "1W",
	days: 7,
};
TIME_SELECTOR_INFO[time_selector_E.ONE_MONTH] = {
	name: "1M",
	days: 30,
};
TIME_SELECTOR_INFO[time_selector_E.THREE_MONTHS] = {
	name: "3M",
	days: 90,
};
TIME_SELECTOR_INFO[time_selector_E.ONE_YEAR] = {
	name: "1Y",
	days: 365,
};
TIME_SELECTOR_INFO[time_selector_E.ALL] = {
	name: "ALL",
	days: null,
};

// Keys correspond to what is returned from SHORT_TIME_SERIES_DATA and LONG_TIME_SERIES_DATA url's.
// This is the data types per each coin, and the keys must correspond to the camelCase version of the SNAKE_CASE selector in the returned data
// Ex: if AAVE_SUPPLY_APY is one of the entries in the returned data, the corresponding data selector key would be supplyApy
export const TIME_SERIES_DATA_SELECTOR_INFO: time_series_data_selector_info_S[] = [];
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.BORROW_APY] = {
	key: "borrowApy",
	sqlKey: "BORROW_APY",
	displayName: "Borrow APY",
	description: "borrow APY excluding COMP",
	unit: "%",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.BORROW_USD] = {
	key: "borrowUsd",
	sqlKey: "BORROW",
	displayName: "Borrow",
	description: "borrowed",
	unit: "$",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.RESERVES_USD] = {
	key: "reservesUsd",
	sqlKey: "RESERVES",
	displayName: "Reserves",
	description: "reserves",
	unit: "$",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.SUPPLY_APY] = {
	key: "supplyApy",
	sqlKey: "SUPPLY_APY",
	displayName: "Supply APY",
	description: "supply APY excluding COMP",
	unit: "%",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.SUPPLY_USD] = {
	key: "supplyUsd",
	sqlKey: "SUPPLY",
	displayName: "Supply",
	description: "supplied",
	unit: "$",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.TOTAL_BORROW_APY] = {
	key: "totalBorrowApy",
	sqlKey: "BORROW_APY",
	displayName: "Borrow APY",
	description: "borrow APY including COMP",
	unit: "%",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.TOTAL_SUPPLY_APY] = {
	key: "totalSupplyApy",
	sqlKey: "TOTAL_SUPPLY_APY",
	displayName: "Supply APY",
	description: "supply APY including COMP",
	unit: "%",
};
TIME_SERIES_DATA_SELECTOR_INFO[time_series_data_selector_E.UTALIZATION] = {
	key: "utalization",
	sqlKey: "UTALIZATION",
	displayName: "Utalization",
	description: "utalization",
	unit: "%",
};

//// URL's for API calls
export const URLS = {
	LONG_TIME_SERIES_DATA: process.env.REACT_APP_LONG_TIME_SERIES_DATA_URL as string,
	SHORT_TIME_SERIES_DATA: process.env.REACT_APP_SHORT_TIME_SERIES_DATA_URL as string,
	TRANSACTIONS: process.env.REACT_APP_TRANACTIONS_URL as string,
	SUMMARY_DATA: "https://api.compound.finance/api/v2/ctoken",
	PAPERCLIP_HOME: "https://twitter.com/papercliplabs",
	GAS_NOW: "https://www.gasnow.org/api/v3/gas/price?utm_source=compoundinfo",
	FLIPSIDE: "https://www.flipsidecrypto.com/",
	COMPOUND_DOCS: "https://compound.finance/docs",
	COMPOUND_FINANCE: "https://compound.finance",
	COMPOUND_GRANTS: "https://twitter.com/compoundgrants",
	GITHUB: "https://github.com/papercliplabs/compound-info",
};

export const SHORT_TERM_DAYS = 8; // For distinguising between short and long term data, based on the time selector

// Gas Tracker constants
export const SPEED_SELECTORS = [
	{ name: "Fast", key: "fast" },
	{ name: "Standard", key: "standard" },
];

export const GAS_USED = [
	{ action: "Supply USDC", gasUsed: 193404 },
	{ action: "Borrow USDC", gasUsed: 332745 },
];
