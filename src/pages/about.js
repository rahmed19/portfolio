import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Jobs from "../components/Jobs"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

const About = ({ data: { allStrapiAbout: { nodes } } }) => {
  const { info, stack, title, image } = nodes[0]
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fixed={image.childImageSharp.fixed} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <ReactMarkdown source={info} />
          {/* <p>{info2}</p> */}
          <br />
          <h4>Advanced Knowledge</h4>
          <div className="underline" />
          <div className="about-stack">
            {stack.slice(0, 21).map((item) => {
              return (
                <span key={item.id} >{item.title}</span>
              )
            })}
          </div>
          <br /> <br />
          <h4>Intermediate Knowledge</h4>
          <div className="underline" />
          <div className="about-stack">
            {stack.slice(21, 30).map((item) => {
              return (
                <span key={item.id} >{item.title}</span>
              )
            })}
          </div>
        </article>
      </div>
    </section>
    <Jobs />
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
