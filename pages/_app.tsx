import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createMixins from '@mui/material/styles/createMixins'
import { useStore } from '../stores/store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const {userStore} = useStore();

  useEffect(() => {
    userStore.getUser();
  },[userStore])
  
  return <Component {...pageProps} />
}

export default MyApp
