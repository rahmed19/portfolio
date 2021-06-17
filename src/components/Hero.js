import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "hero-img-water-3.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query)
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline" />
          <h2>RAYAHMED.CA</h2>
          <h4>Frontend Software Development</h4>
          <a href="https://github.com/rahmed19/resume/raw/main/ray_ahmed_resume.pdf" className="btn" target="new">Download Resume</a>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
