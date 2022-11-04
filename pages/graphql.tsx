import React from "react";
import { getHeader, getPages, getPosts } from '../lib/api';
import { Data } from "@/lib/queries/type"
import Link from "next/link";

type Props = {
    posts: Data,
    pages: Data
};

export default function graphql({ posts, pages }: Props) {

    console.log(pages)

    return (
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
    )
}

export async function getStaticProps() {
    const posts = await getPosts()
    const pages = await getPages()
    const headerMenus = await getHeader()
    return {
        props: { headerMenus, posts, pages }
    };
}
