import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return <article className="project">
    <Image fluid={image.childImageSharp.fluid} className="project-img" />
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3><a href={url} alt="Go to project">{title}</a></h3>
      <p className="project-decription">{description}</p>
      <div className="project-stack">
        {stack.map((item) => {
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github} alt="Github link">
          <FaGithubSquare className="project-icon" alt="Github link" />
        </a>
        <a href={url} alt="Go to project">
          <FaShareSquare className="project-icon" alt="Go to project" />
        </a>
      </div>
    </div>
  </article>
}

Project.propTypes = {}

export default Project
