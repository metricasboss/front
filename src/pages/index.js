import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
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
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id,
          title,
          content,
          feature {
            id
            childImageSharp {
              fixed(width: 200, height:120) {
                ...GatsbyImageSharpFixed
              }
            }
          },
          author {
            id,
            username
          },
          categories {
            id,
            name,
            slug
          }
        }
      }
    }
  }
`

