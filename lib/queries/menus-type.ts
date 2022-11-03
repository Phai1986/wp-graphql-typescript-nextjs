export interface Root {
    data: Data
    extensions: Extensions
  }
  
  export interface Data {
    headerMenus: HeaderMenus
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
  
  export interface Extensions {
    debug: Debug[]
  }
  
  export interface Debug {
    type: string
    message: string
  }
  