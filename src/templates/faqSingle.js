import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"

const FaqSingleTemplate = ({ data }) => (
  <Layout>
       <SEO title={data.strapiArticle.title} />
        <section className="section">
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <input className="input is-medium is-rounded" type="text" placeholder="Digite palavras-chaves para encontrar sua dúvida"></input>
                    </div>
                </div>
                <div className="columns is-desktop">
                    <div className="column is-full">
                        <nav className="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li><Link to="faq">FAQ</Link></li>
                                <li className="is-active"><Link aria-current="page">Google Analytics</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="columns is-desktop">
                    <div className="column">
                        <h1 className="is-size-3">Como instalar Google Analytics?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio dolores eos, <br/>id facere numquam dicta quae cum natus, alias, saepe iusto omnis placeat excepturi illum eligendi voluptate et? Doloribus.</p>
                        
                    </div>
                </div>

                <div className="columns is-vcentered">
                    <div className="column is-2 is-offset-4">
                        <span>Esse artigo foi útil?</span>
                    </div>
                    <div className="column buttons is-offset-1 is-5">
                        <a className="button is-success">Sim</a>
                        <a className="button is-danger">Não</a>
                    </div>
                </div>   
                <div className="columns">
                    <div className="column is-full has-text-centered">
                        <Link className="is-medium button" to="faq">Voltar ao FAQ</Link>
                    </div>
                </div>               
            </div>
        </section> 
  </Layout>
)

export default FaqSingleTemplate

export const query = graphql`
    query FaqSingleTemplate($id: String!) {
        strapiArticle(id: {eq: $id}) {
            title
            content
            feature {
                id
                childImageSharp {
                    fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            author {
                id
                username
            }
        }
    }
`
