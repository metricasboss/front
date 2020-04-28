import { graphql, Link } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            <input class="input is-medium is-rounded" type="text" placeholder="Digite palavras-chaves para encontrar sua dúvida"></input>
          </div>
        </div>
        
      </section>

      <section className="section container is-widescreen">
        <div className="columns is-desktop">
          <div className="column">
            <h1 className="is-size-4">Perguntas Frequentes</h1>
          </div>
        </div>

        <div className="columns is-desktop">
          <div className="column is-one-third">
            <h3 className="is-size-5">Google Analytics</h3>
            <ul>
              {data.allStrapiFaq.edges.map(document => (
                <li><Link to={`/faq/${document.node.id}`}>{ document.node.Ask }</Link></li>
              ))} 
            </ul>
          </div>
        </div>

        <div className="columns is-desktop">
          <div className="column is-one-third">
            <h3 className="is-size-5">Google Analytics</h3>
            <ul>
              <li><Link>O que é Google Analytics</Link></li>
              <li><Link>O que é Google Analytics</Link></li>
              <li><Link>O que é Google Analytics</Link></li>
            </ul>   
          </div>
          <div className="column is-one-third">
            <h3 className="is-size-5">Google Analytics</h3>
            <ul>
              <li><Link>O que é Google Analytics</Link></li>
              <li><Link>O que é Google Analytics</Link></li>
              <li><Link>O que é Google Analytics</Link></li>
            </ul>   
          </div>
          <div className="column is-one-third">
            <h3 className="is-size-5">Google Analytics</h3>
            <ul>
              <li><Link>O que é Google Analytics</Link></li>
              <li><Link>O que é Google Analytics</Link></li>
              <li><Link>O que é Google Analytics</Link></li>
            </ul>   
          </div>
        </div>  
      </section>
  </Layout>
)

export default FaqPage

export const pageQuery = graphql`
  query {
    allStrapiFaq {
      edges {
        node {
          Ask
          id
        }
      }
    }
  }
`