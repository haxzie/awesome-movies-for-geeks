import React, {Component} from 'react'
import {graphql} from 'gatsby'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Chips from '../components/chips'
import MoviesGrid from '../components/movies_grid'

class IndexPage extends Component {

  constructor(props) {
    super(props);
    console.log("constructor called")
    this.state = {
      chipId: 0,
      chips: [
        "All", "Movie", "Series", "Short Movie", "Documentary"
      ],
    }

    this.setChipState = this.setChipState.bind(this);

  }

  setChipState ( chipValue ) {
    this.setState({
      chipId: chipValue
    });
  }

  render () {
    return (
      <Layout>
        <div className="container">
          <Chips 
            chipId={ this.state.chipId } 
            chips={this.state.chips} 
            callback={ this.setChipState }/>
          <MoviesGrid 
            showChip={ this.state.chips[this.state.chipId] } 
            data={ this.props.data }/>
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
                fluid(maxWidth: 800) {
                  aspectRatio
                  src
                  sizes
                  srcSet
                  tracedSVG
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
