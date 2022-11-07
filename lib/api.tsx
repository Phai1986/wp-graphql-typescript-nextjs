import { GET_URI, GET_HEADER, GET_POSTS, GET_PAGES } from '@/lib/queries/get-wp'

async function fetchAPI(query: any, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(GET_URI, {
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

//-----------------------Header------------------------//

export async function getHeader() {
  const data = await fetchAPI(GET_HEADER);
  return data;
}

//-----------------------Posts------------------------//

export async function getPosts() {
  const data = await fetchAPI(GET_POSTS);
  return data;
}

export async function getPostBySlug(slug: any) {
  const data = await fetchAPI(`
  {
    post(id: "${slug}", idType: URI) {
      title
      content
      video {
        videoSource
        videoUrl
        coverImage {
          sourceUrl
        }
      }
    }
  }
  `);
  return data?.post;
}

//-----------------------Pages------------------------//

export async function getPages() {
  const data = await fetchAPI(GET_PAGES);
  return data;
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

