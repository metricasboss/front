import { graphql, Link } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/SearchFaqContainer"

const FaqPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
      <section className="section container is-fluid">

        <div className="columns is-mobile">
          <div className="column is-full">
            <h2 className="has-text-centered is-size-3">Como podemos ajudar?</h2>
          </div>
        </div>

        <div className="columns is-desktop">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Search/>
          </div>
        </div>
        
      </section>

      <section className="section container is-widescreen">
        <div className="columns is-desktop">
          <div className="column">
            <h1 className="is-size-4">Perguntas Frequentes</h1>
          </div>
        </div>
        {data.allStrapiCategory.nodes.map(document => (      
          <div key={document.id} className="columns is-desktop">
            <div className="column is-one-third">
              <h3 className="is-size-5">{document.name}</h3>
              <ul>
              {document.faqs.map(faq => ( 
                <li key={faq.id}><Link to={`/faq/Faq_${faq.id}`}>{ faq.Ask }</Link></li>
              ))} 
              </ul>
            </div>
          </div>
        ))} 
      </section>
  </Layout>
)

export default FaqPage

export const pageQuery = graphql`
  query {
    allStrapiCategory {
      nodes {
        id
        name
        faqs {
          Ask
          answer
          id
        }
      }
    }
  }
`