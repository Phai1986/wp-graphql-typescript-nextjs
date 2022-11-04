import React from "react";
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';

import { getHeader, getPosts } from '@/lib/api';
import { Data } from "@/lib/queries/type"

type Props = {
    posts: Data
};

export default function Posts({ posts }: Props) {

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Container>
                <div className="content">

                    <h1>POSTS</h1>

                    <ul className="pages">
                        {posts?.posts?.edges.map((post, i) => (
                            <li key={i}>
                                <Link href={`/post/${post?.node?.uri}`}>
                                    {post?.node?.title}
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
    const posts = await getPosts()
    const headerMenus = await getHeader()
    return {
        props: { headerMenus, posts }
    };
}
