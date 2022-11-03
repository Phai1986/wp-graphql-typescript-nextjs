import React from "react";
import css from "@/styles/Header.module.css"
import { getAllPagesWithSlugs, getPageBySlug, getAllPostsWithSlugs, getPostBySlug, getAllHeader } from '../lib/api';
import { HeaderMenus } from "@/lib/queries/type"
import Link from "next/link";

type Props = {
  headerMenus: HeaderMenus
};


export default function Header({ headerMenus }: Props) {

  return (
    <header className={css.header}>
      <Link href="/graphql"><a><h2>HEADER</h2></a></Link>
      <ul>
        {headerMenus?.edges.map((menu, i) => (
          <li key={i}>
            <Link href={menu.node.path}>
              <a>
                {menu?.node?.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export async function getStaticProps() {
  const headerMenus = await getAllHeader()
  return {
    props: { headerMenus }
  };
}
