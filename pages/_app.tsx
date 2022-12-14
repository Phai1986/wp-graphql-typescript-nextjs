import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

