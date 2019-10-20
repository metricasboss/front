import { graphql } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
      <section className="section">
        <div className="container">
          <Grid posts={data.googleAnalytics.edges} />
        </div>
      </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    googleAnalytics: allStrapiArticle(
      filter: {categories: {elemMatch: {slug: {eq: "google-analytics"}}}},
      limit: 4
      ) {
      edges {
        node {
          id,
          title,
          content,
          feature {
            id
            childImageSharp {
              fixed(width: 318, height: 318) {
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

