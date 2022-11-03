import React from "react";
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Root } from '../models/pokemon'

type Props = {
  data: Root,
};


export default function demo1({data}: any) {

  return (
    <>
      <h1>TypScript Graphql</h1>
      <ol>
        {data.results.map((res: any, i: any) => (
          <li key={i}>
            <Link href={res.url}>
              <a target='_blabk'>
                <span className="name">{res.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const result = await res.json()
  const data: Root = result

  return {
    props: {
      data,
    }
  }
}

