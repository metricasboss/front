import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"

const FaqSingleTemplate = ({ data }) => (
  <Layout>
       <SEO title={data.strapiFaq.Ask} />
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
                                <li><Link to="/faq/">FAQ</Link></li>
                                <li className="is-active"><span aria-current="page"> Google Analytics</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="columns is-desktop">
                    <div className="column">
                        <h1 className="is-size-3"> {data.strapiFaq.ask}</h1>
                        {data.strapiFaq.answer}
                    </div>
                </div>

                <div className="columns is-vcentered">
                    <div className="column is-2 is-offset-4">
                        <span>Esse artigo foi útil?</span>
                    </div>
                    <div className="column buttons is-offset-1 is-5">
                        <Link to="#" className="button is-success">Sim</Link>
                        <Link to="#" className="button is-danger">Não</Link>
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
        strapiFaq(id: {eq: $id}) {
           ask
           answer
           id
        }
    }
`
