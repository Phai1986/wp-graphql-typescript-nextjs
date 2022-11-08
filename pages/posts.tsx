import React from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from "next/link";

import { getHeader, getPosts } from '@/lib/api';
import { Data } from "@/lib/queries/type"

type Props = {
    posts: Data
};

export default function Posts({ posts }: Props) {
    const router = useRouter();
    console.log(router.pathname)

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Container>
                <h1 className="text-center" style={{ margin: '40px 0' }}>POSTS</h1>
                <Row>
                    {posts?.posts?.edges.map((post, i) => (
                        <Col lg={4} key={i} style={{ margin: '0 0 25px' }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://slp-statics.astockcdn.net/static_assets/staging/22fall/homepage/curated-collections/card-2.jpg?width=580" />
                                <Card.Body>
                                    <Card.Title>{post?.node?.title}</Card.Title>
                                    <Card.Text></Card.Text>
                                    <Link href={`${router.pathname}${post?.node?.uri}`}><a><Button variant="primary">Go somewhere</Button></a></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
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
