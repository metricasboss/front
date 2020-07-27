import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Grid from '../components/grid'

const UserTemplate = ({ data }) => (
    <Layout>
      <SEO title={data.strapiUser.username} />
      <section className="section">
        <div className="container">
          <h2 className="title has-text-dark has-text-weight-bold">Posts criados por: {data.strapiUser.username}</h2>
          <Grid posts={data.allStrapiArticle.edges} />
        </div>
      </section>

    </Layout>
  )

  
export default UserTemplate

export const query = graphql`
  query UserTemplate($username: String) {
    strapiUser(username: { eq: $username }) {
      id
      username
    }
    allStrapiArticle(filter: {author: {elemMatch: {username: {eq: $username}}}}) {
      edges {
        node {
          id
          title
          slug
          feature {
              id
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
        }
      }
    }
  }
` 
