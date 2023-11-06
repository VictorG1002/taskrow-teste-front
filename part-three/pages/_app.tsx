import type { AppProps } from 'next/app';
import { GlobalProvider } from '@/contexts/global/global';

import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Header />
        <Component {...pageProps} />
      </GlobalProvider>
    </ChakraProvider>
  );
}
