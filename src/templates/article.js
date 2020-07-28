import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import "./article.scss"
import Ad from "../images/publi.png"
import Autor from "../images/gustavo.png"
import IcoLink from "../images/link.png"
import IcoMail from "../images/mail.png"
import Adsquare from "../images/square-plubi.png"
import Reactmarkdown from "react-markdown"
import DarkSwitch from "../components/darkSwitch"

const ArticleTemplate = ({ data }) => (
  <Layout>
       <SEO title={data.strapiArticle.title} />

        <section className="section custom-orange-bg">
            <div className="container">
                <h1 className="title has-text-white">
                    {data.strapiArticle.title}
                </h1>
            </div>
        </section>

        <section className="section post">
            <div className="container">
            <div className="columns">
                <div className="column is-three-quarters">
                    <Link to="https://prime.metricasboss.com.br?utm_source=site&utm_medium=post_header">
                        <figure className="image is-fullwidth">
                            <img src={Ad} alt="MB Prime" className="is-fullwidth" />
                        </figure>   
                    </Link>                                
                </div>   
                <div className="column"> 
                    <DarkSwitch />
                </div>
            </div>
                <div className="columns">
                    <div className="column is-three-quarters">                        
                        <div className="content">
                            <Reactmarkdown source={data.strapiArticle.content} escapeHtml={false}/>
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
                            <Link to="https://prime.metricasboss.com.br?utm_source=site&utm_medium=post_sidebar">
                                <figure className="image is-fullwidth is-marginless">
                                    <img src={Adsquare} alt="MB Prime" className="is-fullwidth" />
                                </figure>  
                            </Link> 
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
