import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 

const CategoryTemplate = ({ data }) => (
  <Layout>
    <h1 className="title">Você está vendo posts sobre {data.strapiCategory.name}</h1>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate ($slug: String!) {
        strapiCategory(slug: {eq: $slug}){
            id
            slug
            name
            articles {
                id
                title
                content
            }
        }
    }
`
