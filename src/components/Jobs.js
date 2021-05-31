import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaSleigh } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        id
        position
        category
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
  const [displayValue, setDisplayValue] = useState(false)
  const { company, position, date, desc } = jobs[value]

  return <section className="section jobs">
    {displayValue === false ? <Title title="experience" /> : <Title title="education" />}
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item, index) => {
          return <button
            key={item.strapiId}
            className={`job-btn ${index === value && 'active-btn'}`}
            onClick={() => setValue(index)}
          >{item.category}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <button className="btn center-btn" onClick={() => setDisplayValue((prev) => (!prev))}>
      {displayValue === false ? "Show Education" : "Show Experience"}
    </button>
  </section>
}

export default Jobs