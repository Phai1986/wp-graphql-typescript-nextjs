// const API_URL = process.env.WP_URL;

async function fetchAPI(query: any, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch('https://wpgraphql.digitiv.net/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

//-----------------------Menus header------------------------//

export async function getAllHeader() {
  const data = await fetchAPI(`
{
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        id
        label
        path
        url
        childItems {
          nodes {
            id
            label
            path
            url
          }
        }
      }
    }
  }
}
`);
  return data?.headerMenus;
}

//-----------------------Posts------------------------//

export async function getAllPostsWithSlugs() {
  const data = await fetchAPI(`
  {
    posts(first: 10000) {
      edges {
        node {
          id
          title
          date
          uri
          content
          slug
        }
      }
    }
  }
  `);
  return data?.posts;
}

export async function getPostBySlug(slug: any) {
  const data = await fetchAPI(`
  {
    post(id: "${slug}", idType: URI) {
      title
      content
    }
  }
  `);
  return data?.post;
}

//-----------------------Pages------------------------//

export async function getAllPagesWithSlugs() {
  const data = await fetchAPI(`
  {
    pages(first: 10000) {
      edges {
        node {
          title
          slug
          uri
        }
      }
    }
  }
  `);
  return data?.pages;
}

export async function getPageBySlug(slug: any) {
  const data = await fetchAPI(`
  {
    page(id: "${slug}", idType: URI) {
      title
      content
    }
  }
  `);
  return data?.page;
}


// export async function getLatestPosts() {
//     const data = await fetchAPI(
//         `
//       query AllPosts {
//         posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
//           edges {
//             node {
//               id
//               title
//               excerpt
//               content
//               featuredImage {
//                 node {
//                   sourceUrl
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//     );

//     return data?.posts;
// }