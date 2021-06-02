import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaSleigh } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        company2
        date
        date2
        id
        position
        position2
        category
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = ({ showLink }) => {
  const data = useStaticQuery(query)
  const { allStrapiJobs: { nodes: jobs } } = data
  const [value, setValue] = useState(0)
  const { company, company2, position, position2, date, date2, desc, desc2 } = jobs[value]

  return <section className="section jobs">
    <Title title="experience" />
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

        {showLink ?
          //Show 7 items from experiences
          desc.slice(0, 10).map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          }) :
          //Show all experiences
          desc.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          })
        }

        <h3>{position2}</h3>
        <h4>{company2}</h4>
        <p className="job-date">{date2}</p>

      </article>
    </div>
    {showLink && <Link to="/about#experience" className="btn center-btn">
      show all
    </Link>}
  </section>
}

export default Jobs