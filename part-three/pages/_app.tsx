import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/Header';
import { GlobalProvider } from '@/contexts/global/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalProvider>
        <Header />
        <Component {...pageProps} />
      </GlobalProvider>
    </ChakraProvider>
  );
}
