import React from "react";
import { GetStaticProps } from 'next'
import { getHeader } from '@/lib/api';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { GET_CONTENT, GET_URI } from "@/lib/queries/get-wp";
import { Data } from "@/lib/queries/type"

type Props = {
    headerMenus: Data
};

export default function apollo_demo({ headerMenus }: Props) {

    console.log(headerMenus);
    

    return (
        <div>
            <h1>DEMO</h1>
            <ul>
                {headerMenus?.headerMenus?.edges.map((menu, i) => (
                    <li key={i}>{menu?.node?.label}
                        <ul>
                            {menu?.node?.childItems?.nodes.map((submenu, j) => (
                                <li key={j}>{submenu?.label}</li>
                            ))}
                        </ul>
                    </li>
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
        query: gql`${GET_CONTENT}`,
    });
    const headerMenus = await getHeader()

    return {
        props: {
            headerMenus
        }
    }
}
