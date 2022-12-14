import React from "react";
import { getHeader} from '@/lib/api';

type Props = {};

export default function index({}: Props) {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>INDEX</h1>
    </>
  );
}


export async function getStaticProps() {
  const headerMenus = await getHeader()
  return {
      props: {headerMenus}
  };
}
