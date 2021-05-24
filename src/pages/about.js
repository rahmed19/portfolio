import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({ data: { allStrapiAbout: { nodes } } }) => {
  const { info, stack, title, image } = nodes[0]
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fixed={image.childImageSharp.fixed} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item) => {
              return <span key={item.id} >{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  {
      allStrapiAbout {
      nodes {
      id
        title
        info
        stack {
      id
          title
        }
        image {
      childImageSharp {
      fixed {
      ...GatsbyImageSharpFixed
    }
          }
        }
      }
    }
  }
`


export default About
