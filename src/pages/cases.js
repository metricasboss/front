import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./cases.scss"
import ImgTest from "../images/case.png"

const CasesPage = ({ data }) => (
  <Layout>
    <SEO title="Cases" />
      <section class="section custom-blue-bg">
            <div class="container">
                <h1 class="title has-text-white">
                    Cases
                </h1>
            </div>
        </section>

        <section className="cases section">
          <div className="container">
            <div class="columns">
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>              
            </div>
            <div class="columns">
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>
              <div class="column">
                <Link to="" className="has-text-grey has-text-centered has-text-weight-bold is-size-4">
                  <figure className="image img-cases">
                    <img src={ImgTest} alt="MB Prime" className="is-fullwidth is-rounded" />
                  </figure>
                    <p>Aquarius Store
                    aumentou sua venda 
                    m 308% otimizando
                    o investimento</p>
                </Link>
              </div>              
            </div>
          </div>
        </section>
  </Layout>
)

export default CasesPage

export const pageQuery = graphql`
  query {
    googleAnalytics: allStrapiArticle(
      filter: {categories: {elemMatch: {slug: {eq: "web-analytics"}}}},
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