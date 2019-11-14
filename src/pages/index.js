import { graphql } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Calendly from "../components/calendly"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 class="title">
                Large title
              </h1>
            </div>
            <div class="column">
              <h2 class="title">
                Web Analytics na Prática
              </h2>
              <p class="subtitle">O melhor e mais completo curso de Web Analytics do Brasil
agora online para o mundo inteiro</p>
              <button class="button is-primary is-inverted is-rounded">Matricule-se já!</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="title has-text-dark has-text-weight-bold">Últimos posts do blog</h2>
        <Grid posts={data.googleAnalytics.edges} />
      </div>
    </section>

    <section className="section">
      <Calendly />
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
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid
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

