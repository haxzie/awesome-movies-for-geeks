import React from 'react'
import {graphql} from 'gatsby'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Chips from '../components/chips'
import MoviesGrid from '../components/movies_grid'

const IndexPage = ({data}) => (
  <Layout>
    <div className="container">
      <Chips/>
      <MoviesGrid data={data}/>
    </div>
  </Layout>
)

export default IndexPage

export const moviesQuery = graphql `
query MoviesQuery {
    allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/movies/.*md$/" } }
    ){
      edges {
        node {
          frontmatter {
            date
            title
            type
            rating
            release
            poster {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                    srcSet
                    base64
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
