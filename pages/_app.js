import '@/styles/globals.css'
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
};
export default function App({ Component, pageProps }) {
  return <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
  </Web3ReactProvider>
}
