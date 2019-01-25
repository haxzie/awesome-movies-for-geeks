import React, {Component} from 'react'
import {graphql} from 'gatsby'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Chips from '../components/chips'
import MoviesGrid from '../components/movies_grid'

class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chip: 'all'
    }

    this.setChipState = this.setChipState.bind(this);
  }

  setChipState ( chipValue ) {
    this.setState({
      chip: chipValue
    });
  }

  render () {
    return (
      <Layout>
        <div className="container">
          <Chips callback={ this.setChipState }/>
          <MoviesGrid showChip={ this.state.chip } data={ this.props.data}/>
        </div>
      </Layout>
    );
  }
}

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
                fluid(maxWidth: 400) {
                  aspectRatio
                  src
                  sizes
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
