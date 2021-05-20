import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"


const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return <Layout>
    <section className="blog-age">
      <Blogs blogs={blogs} title=" latest blogs" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        content
        date(formatString: "MMMM Do, YYYY")
        description
        title
        id
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
