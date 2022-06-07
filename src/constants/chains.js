export const networks = [8080, 4];

export const ChainId = {
  MAINNET: 8080,

  RINKEBY: 4,
};

export const routerAddress = new Map();
routerAddress.set(
  ChainId.MAINNET,
  "0xe14b41d23853c97eb9ebb6c829800ff1b11de7f8"
);

routerAddress.set(
  ChainId.RINKEBY,
  "0x14e4DAe87990FC8947718f7ac0317CdD9b58CD08"
);
