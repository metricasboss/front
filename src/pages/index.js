import { graphql, Link } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Calendly from "../components/calendly"
import "../components/home.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
  
      <section className="section">
          <div className="container">
            <div className="columns cta-bg">
            <div className="column is-4 home-mac">
              
            </div>
              <div className="column is-5">    
                <h1 className="title has-text-white">
                  Métricas Boss Prime
                </h1>
                <h2 className="subtitle is-size-6 has-text-white">
                  O melhor e mais completo curso de Web Analytics do Brasil<br />
                  agora online para o mundo inteiro
                </h2>
                <Link className="button is-success" to="/">
                  Inscreva-se agora mesmo!
                </Link>
              </div> 
              <div className="column has-background-black">               
                <form action="" className="column is-full">
                  <p className="ga-ico has-text-white is-size-7">Verifique as configurações de sua 
                  conta no Google Analytics com a
                  nossa ferramenta de  auditoria:</p>
                      <div className="field">
                        <div className="control">
                          <input type="text" className="input is-rounded" placeholder="Digite seu nome" aria-label="nome" />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input type="email" className="input is-rounded" placeholder="Digite seu e-mail" aria-label="email"/>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input type="text" className="input is-rounded" placeholder="Digite o nome da sua empresa" aria-label="nome da empresa"/>
                        </div>
                      </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <button className="button is-success is-fullwidth">Teste o seu Google Analytics</button>
                        </div>
                      </div>
                    </div>
                </form>
              </div>
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
        <div className="container">
          <div className="columns has-background-black box institucional">
            <div className="column">
              <h1 className="title has-text-white">Quem é a Métricas Boss?</h1>
              <p className="has-text-white is-size-6">A Métricas Boss é uma consultoria de Web Analytics e Google Analytics que transforma dados em insights. Avaliamos através de relatórios o comportamento do consumidor,
              conversão e a performance dos canais de media. A Métricas Boss trabalha com Otimização de conversão, Testes A/B, Usabilidade e Comportamento do consumidor.
              <br/><br/>
              Com uma equipe multidisciplinar especializada em Web Analytics, focamos em otimizar todo o seu negócio, desde a parte técnica, insights e melhoria contínua do cenário. Somos
              parceiros das mais diversas ferramentas de Web Analytics, que junto ao nosso time vão otimizar seu site. Conte com a Métricas Boss para uma consultoria em Web Analytics!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-fifths bg-form is-hidden-mobile"></div>
            <div className="column">
              <h3 className="title">Vamos trocar uma idéia?</h3>
              <Calendly/>
            </div>
          </div>
        </div>
      </section>

   
  </Layout>
)
 
export default IndexPage

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
