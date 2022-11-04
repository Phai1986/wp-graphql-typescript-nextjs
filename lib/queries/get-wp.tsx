import { gql } from "@apollo/client"

export const GET_URI = 'https://wpgraphql.digitiv.net/graphql'

export const GET_CONTENT = gql`
query MyQuery {
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
    pages(first: 10000) {
        edges {
          node {
            title
            slug
          }
        }
      }
  }
`

export const GET_HEADER = `
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
`
export const GET_POSES = `
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
`

export const GET_PAGES = `
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
`