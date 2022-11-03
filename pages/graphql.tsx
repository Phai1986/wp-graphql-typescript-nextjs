import React from "react";
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Link from "next/link";
import { GET_CONTENT, GET_URI } from "@/lib/queries/get-wp";
import Test from "@/components/Test";


export default function graphql({ contents }: any) { 

    return (
        <>            
            <div className="content">

                <Test contents={contents} />

                <h1>PAGES</h1>

                <ul className="pages">
                    {contents.pages.map((page: any, i: any) => {
                        return (
                            <li key={i}>
                                <h2>
                                    <Link href={page.node.slug}>
                                        <a>
                                            {page.node.title}
                                        </a>
                                    </Link>
                                </h2>
                            </li>
                        )
                    })}
                </ul>

                <h1>POSTS</h1>

                <ul className="posts">
                    {contents.posts.map((post: any, i: any) => {
                        return (
                            <li key={i}>
                                <h2>
                                    <Link href={`/post/${post.node.slug}`}>
                                        <a>
                                            {post.node.title}
                                        </a>
                                    </Link>
                                </h2>
                            </li>
                        )
                    })} 
                </ul>

            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const client = new ApolloClient({
        uri: GET_URI,
        cache: new InMemoryCache(),
    });
    const { data } = await client.query({
        query: GET_CONTENT,
    });
    const posts = data.posts?.edges
    const pages = data.pages?.edges
    
    return {
        props: {
            contents: {
                posts, pages
            }
        }
    }
}
