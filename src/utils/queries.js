// import { graphql } from 'gatsby'

const allGhostPosts = function allGhostPosts(tag) {
    if (!tag) {
        throw new Error(`Please provide a tag property`)
    }

    return (`
          {
            allGhostPost(
                filter: {tags: {elemMatch: {slug: {eq: "${tag}"}}},
                slug: {ne: "data-schema"}}
            ) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `)
}

const allMarkdownPosts = function allMarkdownposts() {
    return (`
        {
            allMarkdownRemark(
                sort: {order: ASC, fields: [frontmatter___date]},
                filter: {fields: {slug: {ne: "/data-schema/"}}}
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `)
}

module.exports = {
    allGhostPosts: allGhostPosts,
    allMarkdownPosts: allMarkdownPosts,
}
