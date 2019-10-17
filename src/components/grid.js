import React from "react"
import Card from "./card"

const Grid = ({ categoryPost }) (
    <div className="columns">
      {data.allStrapiArticle.edges.map(document => (
        <Card singlePost={document.node} />
      ))} 
      </div>
)

export default Grid