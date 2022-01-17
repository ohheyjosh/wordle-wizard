import '../styles/globals.css';
import type { AppProps } from 'next/app';

function WordleWizard({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default WordleWizard;
