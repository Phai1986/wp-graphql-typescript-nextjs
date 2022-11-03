export interface Root {
  data: Data
  extensions: Extensions
}

export interface Data {
  headerMenus: HeaderMenus
  posts: Posts
  pages: Pages
}

export interface HeaderMenus {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  id: string
  label: string
  path: string
  url: string
  childItems: ChildItems
}

export interface ChildItems {
  nodes: Node2[]
}

export interface Node2 {
  id: string
  label: string
  path: string
  url: string
}

export interface Posts {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node3
}

export interface Node3 {
  id: string
  title: string
  date: string
  uri: string
  content: string
  slug: string
}

export interface Pages {
  edges: Edge3[]
}

export interface Edge3 {
  node: Node4
}

export interface Node4 {
  title: string
  slug: string
  uri: string
}

export interface Extensions {
  debug: Debug[]
}

export interface Debug {
  type: string
  message: string
}
