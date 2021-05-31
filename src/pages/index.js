import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }

  } = data

  return <Layout>
    <Hero />
    <Projects projects={projects} title="featured projects" showLink />
    <Jobs />
    <Blogs blogs={blogs} title="blog" showLink />
    <Services />
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects(filter: {feature: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: ASC}, limit: 3) {
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

