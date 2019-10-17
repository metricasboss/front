import React from "react"

const Grid = ({ CategoryPost }) (
    <div className="columns">
      {data.allStrapiArticle.edges.map(document => (
        <div key={document.node.id} className="column">
        <Link to={`/${document.node.id}`}>
              {document.node.title}
            </Link>
            <Img fixed={document.node.feature.childImageSharp.fixed}/>
        </div>
      ))} 
      </div>
)

export default Grid