/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const movieTemplate = path.resolve(`src/templates/movie_template/index.jsx`)

    return graphql(`
    {
      allMarkdownRemark(
        limit: 1000,
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.title,
                component: movieTemplate,
                context: {
                    slug: node.frontmatter.title
                }
            })
        })
    })
}