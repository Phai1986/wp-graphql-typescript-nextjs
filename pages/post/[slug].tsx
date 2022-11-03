import React from "react";
import { getAllPagesWithSlugs, getPageBySlug, getAllPostsWithSlugs, getPostBySlug } from '../../lib/api';
import Head from 'next/head';
import styles from '../../styles/Home.module.css'


//----------------POSTS-----------------//

export default function Post(post) {
    return (
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
    );
}

export async function getStaticPaths() {
    const postsWithSlugs = await getAllPostsWithSlugs();
    return {
        paths: postsWithSlugs?.edges.map(({ node }) => `/post/${node.slug}`) || [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug);
    console.log(post)
    return {
        props: post
    };
}