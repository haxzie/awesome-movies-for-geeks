import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import './style.scss'


function titleCap(title) {
    let splitTitle = title.split('')
    splitTitle[0] = splitTitle[0].toUpperCase()
    return splitTitle.join('')
}

const MovieTemplate = ({ data }) => {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark
    return (
        <Layout>
            <div className="blur-bg">
                <div className="image-holder">
                    <Img style={{height: '100%'}} fluid={frontmatter.poster.childImageSharp.fluid} />
                </div>
            </div>
            <div className="container">
                <div className="movie-layout">
                    <div className="poster">
                        <Img style={{height: '100%'}} fluid={frontmatter.poster.childImageSharp.fluid} />
                    </div>
                    <div className="details">
                        <h1>{frontmatter.title}</h1>
                        <p className="caption">
                            { frontmatter.release } • { titleCap(frontmatter.type) }
                        </p>
                        <p className="description" dangerouslySetInnerHTML={{__html: html}}></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MovieTemplate
export const movieQuery = graphql`
query movieQuery($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
        html
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            type
            rating
            release
            poster {
              publicURL
              childImageSharp {
                fluid(maxWidth: 300) {
                    srcSet
                    base64
                }
              }
            }
        }
    }
}
`