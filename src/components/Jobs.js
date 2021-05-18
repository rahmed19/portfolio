import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        id
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const { allStrapiJobs: { nodes: jobs } } = data
  const [value, setValue] = useState(0)

  return <section className="sections jobs">
    <Title title="experience" />
    <div 
  </section>
}

export default Jobs
