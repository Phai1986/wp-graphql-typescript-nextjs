import React from "react";
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { GET_CONTENT, GET_URI } from "@/lib/queries/get-wp";
import { Data } from "@/lib/queries/menus-type"

type Props = {
    headerMenus: Data
};

export default function demo2({ headerMenus }: Props) {

    console.log(headerMenus)

    return (
        <div>
            <h1>DEMO</h1>
            <ul>
                {headerMenus?.headerMenus?.edges.map((menu,i) => (
                    <li key={i}>{menu.node.label}</li>
                ))}
            </ul>
        </div>
    );
}


export const getStaticProps: GetStaticProps = async (context) => {
    const client = new ApolloClient({
        uri: GET_URI,
        cache: new InMemoryCache(),
    });
    const { data } = await client.query({
        query: GET_CONTENT,
    });
    const headerMenus = data

    return {
        props: {
            headerMenus
        }
    }
}
