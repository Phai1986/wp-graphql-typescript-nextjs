import React from "react";
import { getHeader, getPages, getPageBySlug } from '@/lib/api';
import Head from 'next/head';
import styles from '@/styles/Home.module.css'


//----------------PAGES-----------------//

export default function Page({page}:any) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{page.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.main}>
                <h1 className='title'>{page.title}</h1>
                <div className='content' dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const pagesWithSlugs = await getPages();
    return {
        paths: pagesWithSlugs?.pages?.edges.map(({ node }:any) => `/${node.slug}`) || [],
        fallback: true,
    };
}

export async function getStaticProps({ params }:any) {
    const page = await getPageBySlug(params.slug);
    const headerMenus = await getHeader()
    return {
        props: {page, headerMenus}
    };
}

