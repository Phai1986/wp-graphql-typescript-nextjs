export interface Root {
    data: Data
    extensions: Extensions
  }
  
  export interface Data {
    posts: Posts
  }
  
  export interface Posts {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    id: string
    title: string
    date: string
  }
  
  export interface Extensions {
    debug: Debug[]
  }
  
  export interface Debug {
    type: string
    message: string
  }