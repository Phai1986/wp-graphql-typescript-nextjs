import React from "react";
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';

import { getHeader, getPages } from '@/lib/api';
import { Data } from "@/lib/queries/type"

type Props = {
    pages: Data
};

export default function Pages({ pages }: Props) {

    return (
        <>
            <Head>
                <title>Pages</title>
            </Head>
            <Container>
                <div className="content">

                    <h1>PAGES</h1>

                    <ul className="pages">
                        {pages?.pages?.edges.map((page, i) => (
                            <li key={i}>
                                <Link href={page?.node?.uri}>
                                    {page?.node?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const pages = await getPages()
    const headerMenus = await getHeader()
    return {
        props: { headerMenus, pages }
    };
}
