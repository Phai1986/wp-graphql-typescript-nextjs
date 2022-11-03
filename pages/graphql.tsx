import React from "react";
import { getAllHeader, getAllPagesWithSlugs, getAllPostsWithSlugs } from '../lib/api';
import { HeaderMenus, Pages, Posts } from "@/lib/queries/type"
import Link from "next/link";

type Props = {
    posts: Posts,
    pages: Pages
};

export default function graphql({ posts, pages }: Props) {

    console.log(pages)

    return (
        <div className="content">

            <h1>PAGES</h1>

            <ul className="pages">
                {pages?.edges.map((page, i) => (
                    <li key={i}>
                        <Link href={page?.node?.uri}>
                            {page?.node?.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <h1>POSTS</h1>

            <ul className="pages">
                {posts?.edges.map((post, i) => (
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
    const posts = await getAllPostsWithSlugs()
    const pages = await getAllPagesWithSlugs()
    const headerMenus = await getAllHeader()
    return {
        props: { headerMenus, posts, pages }
    };
}
