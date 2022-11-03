import React from "react";
import Link from "next/link";

export default function Nav({ menu_header }: any) {

  return (     
      <ul>
        {menu_header.map((menu: any, i: any) => (
          <li key={i}>
            <Link href={menu.node.path}>
              <a>
                {menu.node.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
  )
}
