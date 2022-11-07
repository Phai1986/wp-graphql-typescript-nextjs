import React from "react";
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import styles from '@/styles/Home.module.css'

import { getHeader, getPages, getPageBySlug } from '@/lib/api';



export default function Page({ page }: any) {

    return (
        <>
            <Head>
                <title>{page.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Container>
                <div className={styles.main}>
                    {page.title && <h1 className='title'>{page.title}</h1>}
                    {page.content && <div className='content' dangerouslySetInnerHTML={{ __html: page.content }} />}
                </div>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const pagesWithSlugs = await getPages();
    return {
        paths: pagesWithSlugs?.pages?.edges.map(({ node }: any) => `/${node.slug}`) || [],
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    const page = await getPageBySlug(params.slug);
    const headerMenus = await getHeader()
    return {
        props: { headerMenus, page }
    };
}

