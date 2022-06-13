import * as chains from "./chains";

// If you add coins for a new network, make sure Weth address (for the router you are using) is the first entry
const MAINNETCoins = [
  {
    name: "Shardeum",
    abbr: "SHM",
    iconn:"../Navbar/logobt.svg",
    address: "", // Weth address is fetched from the router
  },
  {
    name: "Dai",
    abbr: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
  {
    name: "Tether USD",
    abbr: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  },
  {
    name: "WazirX",
    abbr: "WRX",
    address: "0xbd6e8df6e2f43dcf4f78d45fcaf81ec5bb8a39e8",
  },
  {
    name: "Shiba Inu",
    abbr: "SHIB",
    address: "0x886ad0ce8d55b3dbb4452760e2ff02162ec9ba30",
  },
  {
    name: "Bitcoin",
    abbr: "SBTC",
    address: "0xc49f46cb20873f1171d96e7d591b1c290d06c7da",
  },
  {
    name: "AAVE",
    abbr: "AAVE",
    address: "0xdb64742dcf15dbbfd0fda017837de0495bd0c93c",
  },
  {
    name: "Basic Attention",
    abbr: "BAT",
    address: "0x9b17aad6261b3fb18e3bea67995392353a5c436c",

  },
  {
    name: "NEXO",
    abbr: "NEXO",
    address: "0x6855df24832c816b45024969ec4b6f4208f6a5ca",
  },
];



const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);

export default COINS;
