import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createMixins from '@mui/material/styles/createMixins'

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
