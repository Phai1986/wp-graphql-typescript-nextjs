import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { GET_CONTENT, GET_URI } from "@/lib/queries/get-wp";


function MyApp({ Component, pageProps }: AppProps, {Menus}: any) {
 
  console.log(Menus);
  

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

