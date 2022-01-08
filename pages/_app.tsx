import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createMixins from '@mui/material/styles/createMixins'
import { useStore } from '../stores/store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const {userStore} = useStore();
  
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  },[])

  useEffect(() => {
    userStore.getUser();
  },[userStore])
  
  return <Component {...pageProps} />
}

export default MyApp
