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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>WP GraphQL / TypeScript</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {headerMenus?.headerMenus?.edges.map((menu, i) => (
              <>
                {menu?.node?.childItems?.nodes?.length > 0 &&
                  <NavDropdown title={menu?.node?.label} id="basic-nav-dropdown">{menu?.node?.childItems?.nodes.map((sub, j) =>   (<Link href={sub?.path}><a className="dropdown-item">{sub?.label}</a></Link>)
                  )}
                  </NavDropdown>}
                {!menu?.node?.childItems?.nodes?.length && <Link href={menu?.node?.path}><a className="nav-link">{menu?.node?.label}</a></Link>}
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
