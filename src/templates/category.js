import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 
import Grid from "../components/grid"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <section className="section">
      <div className="container">

		<nav className="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><a href="#">Categorias</a></li>
				<li className="is-active"><a href="#" aria-current="page">{data.strapiCategory.name}</a></li>
			</ul>
		</nav>

		<h1 className="title">Você está vendo posts sobre {data.strapiCategory.name}</h1>

		<div className="tabs">
			<ul>
				<li className="is-active"><a>{data.strapiCategory.name}</a></li>
				<li><a>Google Tag Manager</a></li>
				<li><a>Podcast</a></li>
				<li><a>Todas</a></li>
			</ul>
		</div>
        
		<Grid posts={data.allStrapiArticle.edges} />
      </div>
    </section>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate ($slug: String!) {
		strapiCategory(slug: {eq: $slug}){
			id
			slug
			name
		}
        allStrapiArticle(
			filter: {categories: {elemMatch: {slug: {eq: $slug}}}},
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
