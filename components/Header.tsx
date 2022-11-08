import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

import { getHeader } from '@/lib/api';
import { Data } from "@/lib/queries/type"


type Props = {
  headerMenus: Data
};

export default function Header({ headerMenus }: Props) {

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand><img width="60" src="https://static.vecteezy.com/system/resources/previews/000/232/644/non_2x/tree-logo-abstract-design-logo-negative-space-style-vector.jpg" /> WP GraphQL / TypeScript</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {headerMenus?.headerMenus?.edges.map((menu, i) => (
              <>
                {menu?.node?.childItems?.nodes?.length > 0 &&
                  <NavDropdown title={menu?.node?.label} id="basic-nav-dropdown" key={i}>{menu?.node?.childItems?.nodes.map((sub, j) =>   (<Link href={sub?.path} key={j}><a className="dropdown-item">{sub?.label}</a></Link>)
                  )}
                  </NavDropdown>}
                {!menu?.node?.childItems?.nodes?.length && <Link href={menu?.node?.path} key={i}><a className="nav-link">{menu?.node?.label}</a></Link>}
              </>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export async function getStaticProps() {
  const headerMenus = await getHeader()
  return {
    props: { headerMenus }
  };
}
