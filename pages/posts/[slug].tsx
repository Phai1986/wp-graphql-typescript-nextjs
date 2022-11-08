import React from "react";
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/Home.module.css'

import { getHeader, getPosts, getPostBySlug } from '@/lib/api';


export default function Post({ post }: any) {

    console.log(post);


    return (
        <Container className={styles.main}>
            <Head>
                <title>{post.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Row>
                <Col lg={12}>
                    <h1 className='title'>{post.title}</h1>
                    {post.content && <div className='content' dangerouslySetInnerHTML={{ __html: post.content }} />}
                    {post.video.videoUrl && <p>{post.video.videoUrl}</p>}
                    {post.video.coverImage && <img src={post.video.coverImage.sourceUrl} alt="image" />}
                    {post.video.videoSource && <div className={styles.iframe} dangerouslySetInnerHTML={{ __html: post.video.videoSource }} />}
                </Col>
            </Row>
        </Container>
    );
}


export async function getStaticPaths() {
    const postsWithSlugs = await getPosts();
    return {
        paths: postsWithSlugs?.posts?.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
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