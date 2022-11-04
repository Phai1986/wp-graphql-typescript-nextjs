import React from "react";
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import styles from '@/styles/Home.module.css'

import { getHeader, getPosts, getPostBySlug } from '@/lib/api';


export default function Post({ post }: any) {
    return (
        <Container>
            <div className={styles.container}>
                <Head>
                    <title>{post.title}</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <div className={styles.main}>
                    <h1 className='title'>{post.title}</h1>
                    <div className='content' dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </Container>
    );
}

export async function getStaticPaths() {
    const postsWithSlugs = await getPosts();
    return {
        paths: postsWithSlugs?.posts?.edges.map(({ node }: any) => `/post/${node.slug}`) || [],
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    const post = await getPostBySlug(params.slug);
    const headerMenus = await getHeader()
    return {
        props: { post, headerMenus }
    };
}