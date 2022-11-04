import React from "react";
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from "next/link";

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
                <h1 className="text-center" style={{ margin: '40px 0' }}>PAGES</h1>
                <Row>
                    {pages?.pages?.edges.map((page, i) => (
                        <Col lg={4} style={{ margin: '0 0 25px' }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://slp-statics.astockcdn.net/static_assets/staging/22fall/homepage/curated-collections/card-2.jpg?width=580" />
                                <Card.Body>
                                    <Card.Title>{page?.node?.title}</Card.Title>
                                    <Card.Text></Card.Text>
                                    <Link href={`${page?.node?.uri}`}><a><Button variant="primary">Go somewhere</Button></a></Link>
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
    const pages = await getPages()
    const headerMenus = await getHeader()
    return {
        props: { headerMenus, pages }
    };
}
