import React from 'react'
import Helmet from 'react-helmet'
import {DiscussionEmbed} from 'disqus-react'
import GatsbyConfig from '../../../gatsby-config'

import Layout from '../../components/layout'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import './style.scss'

function titleCap(title) {
    let splitTitle = title.split('')
    splitTitle[0] = splitTitle[0].toUpperCase()
    return splitTitle.join('')
}

const MovieTemplate = ({data}) => {
    const {markdownRemark} = data
    const {frontmatter, html, excerpt} = markdownRemark

    //Disqus config
    const disqusShortname = GatsbyConfig.siteMetadata.title;
    const disqusConfig = {
        identifier: `${frontmatter.release}-${frontmatter.type}-${frontmatter.title}`,
        title: `${frontmatter.title} | GeekTube - Awesome ${frontmatter.type}s`
    };

    return (
        <Layout>
            <Helmet>
                <title>{`${frontmatter.title} | GeekTube - Awesome ${frontmatter.type}s`}</title>
                <link rel="canonical" href="https://geektube.netlify.com"/>
                <meta name="description" content={excerpt}/>
                <head
                    prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"/>
                <meta property="og:type" content="article"/>
                <meta
                    property="og:url"
                    content={`https://geektube.netlify.com/${frontmatter.title}`}/>
                <meta
                    property="og:title"
                    content={`${frontmatter.title} | GeekTube - Awesome ${frontmatter.type}s`}/>
                <meta property="og:image" content={frontmatter.poster.publicURL}/>
                <meta property="og:site_name" content="GeekTube"/>
            </Helmet>
            <div className="blur-bg">
                <div className="image-holder">
                    <Img
                        style={{
                        height: '100%'
                    }}
                        fluid={frontmatter.poster.childImageSharp.fluid}/>
                </div>
            </div>
            <div className="container">
                <div className="movie-layout">
                    <div className="poster">
                        <Img
                            style={{
                            height: '100%'
                        }}
                            fluid={frontmatter.poster.childImageSharp.fluid}/>
                    </div>
                    <div className="details">
                        <h1>{frontmatter.title}</h1>
                        <p className="caption">
                            {frontmatter.release}
                            • {titleCap(frontmatter.type)}
                        </p>
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{
                            __html: `<div>${html}</div>`
                        }}></div>

                        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MovieTemplate
export const movieQuery = graphql `
query movieQuery($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
        excerpt(pruneLength: 280)
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
                    aspectRatio
                    src
                    sizes
                    srcSet
                    base64
                }
              }
            }
        }
    }
}
`