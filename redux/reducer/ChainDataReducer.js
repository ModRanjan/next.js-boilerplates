const initialState = {
  name: 'Ethereum Mainnet',
  chain: 'ETH',
  chainId: 1,
  nativeCurrencySymbol: 'ETH',
  rpc: [`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`],
  logoUrl: '/images/chainLogo/ethereum.png',
  subgraphApiUrl:
    'https://api.thegraph.com/subgraphs/name/tusharmahajan8359/web3-goerli',
};

export const ChainDataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'SetChainData':
      state = {
        ...payload,
      };

      return state;
    default:
      return state;
  }
};
