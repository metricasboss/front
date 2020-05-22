import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"
import "./article.scss"
import Ad from "../images/publi.png"
import Light from "../images/light.png"
import Autor from "../images/gustavo.png"
import IcoLink from "../images/link.png"
import IcoMail from "../images/mail.png"
import Adsquare from "../images/square-plubi.png"

const ArticleTemplate = ({ data }) => (
  <Layout>
       <SEO title={data.strapiArticle.title} />

        <section class="section custom-orange-bg">
            <div class="container">
                <h1 class="title has-text-white">
                    {data.strapiArticle.title}
                </h1>
            </div>
        </section>

        <section className="section post">
            <div className="container">
            <div className="columns">
                <div className="column is-three-quarters">
                    <a href="https://prime.metricasboss.com.br" target="_blank">
                        <figure className="image is-fullwidth">
                            <img src={Ad} alt="MB Prime" className="is-fullwidth" />
                        </figure>   
                    </a>                                
                </div>   
                <div className="column"> 
                    <div className="light has-text-white has-background-black">
                        <div className="media is-vcentered">
                            <div className="media-left">
                                <span className="luz-apagar"></span>
                            </div>
                            <div className="media-content">
                                <Link to="" className="apagar">ATIVAR</Link> <br />
                                Modo Noturno
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
                <div className="columns">
                    <div className="column is-three-quarters">                        
                        <div className="content">
                            <p>Possivelmente você já havia usado no GA a dimensão tamanho da tela, mas já usou a dimensão tamanho do Navegador? Essa dimensão está disponível no Google Analytics desde 2016 mas poucas pessoas possuem conhecimento e sabem como ela pode te ajudar a pegar fraudes! Sim, fraudes! Essa é uma dimensão MUITO importante para poder nos ajudar a entender se alguma origem está fazendo sobreposição.</p>

                            <p>A dimensão tamanho do Navegador do GA informa o tamanho da viewport do navegador do usuário.
                            Isso tem algumas implicações óbvias na análise de UX / UI. Ela pode ser usado nos mesmos tipos de análise em que você estava usando a Resolução de tela, mas é mais preciso. Você pode usá-lo para análise acima da dobra, para análise de rolagem de página. Você pode até comparar a resolução da tela para exibir o tamanho da porta! Menos óbvios (mas mais interessantes) são os usos possíveis para a detecção de fraudes. SIM, fraudes!</p>

                            <p>Detecção de Fraude de Afiliados</p>
                            <p>Como o tamanho do navegador pode te ajudar a pegar fraudes Gif</p>
                            <p>Espero que esse artigo tenha lhe ajudado! :)</p>
                            <p>{data.strapiArticle.content}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h4 className="has-text-grey is-size-4 has-text-weight-bold">Escrito por</h4> 
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-rounded is-48x48 is-marginless"> 
                                        <img src={Autor} alt={data.strapiArticle.author.username} />                    
                                    </figure>  
                                </div>     
                                <p><Link className="has-text-grey is-uppercase has-text-weight-bold is-size-6"
                                    to={`/authors/${data.strapiArticle.author.username}`}>
                                    {data.strapiArticle.author.username}
                                </Link> <br />
                                <Link className="has-text-grey is-size-7" to={`/authors/${data.strapiArticle.author.username}`}>Ver mais posts</Link>
                                <Link className="ml-10" to=""><img src={IcoLink} alt="Ico Link" /></Link>
                                <Link className="ml-10" to=""><img src={IcoMail} alt="Ico Mail" /></Link> 
                                </p>                     
                            </div>        
                        </div>
                        <div className="content">
                            <a href="https://prime.metricasboss.com.br" target="_blank">
                                <figure className="image is-fullwidth is-marginless">
                                    <img src={Adsquare} alt="MB Prime" className="is-fullwidth" />
                                </figure>  
                            </a> 
                        </div>
                        <div className="content">
                        <h4 className="title has-text-grey is-size-4 has-text-weight-bold">Posts por tema</h4>
                            <ul className="cat-list is-size-6">
                                <li><Link className="has-text-grey has-text-weight-bold is-uppercase" 
                                          to={`#`}>
                                            Web Analytics
                                    </Link>
                                </li>
                                <li><Link className="has-text-grey has-text-weight-bold is-uppercase" 
                                          to={`#`}>
                                            Google Analytics
                                    </Link>
                                </li>
                                <li><Link className="has-text-grey has-text-weight-bold is-uppercase"
                                          to={`#`}>
                                            Google Tag Manager
                                    </Link>
                                </li>
                                <li><Link className="has-text-grey has-text-weight-bold is-uppercase"
                                          to={`#`}>
                                            Podcast de Web Analytics
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
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
