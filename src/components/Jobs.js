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

const Jobs = ({ showLink }) => {
  const data = useStaticQuery(query)
  const { allStrapiJobs: { nodes: jobs } } = data
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]

  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item, index) => {
          return <button
            key={item.strapiId}
            className={`job-btn ${index === value && 'active-btn'}`}
            onClick={() => setValue(index)}
          >{item.company}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>

        {showLink ?
          desc.slice(0, 7).map((item) => {
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

        {/* Show All Experiences */}
        {/* {
          desc.map((item) => {
            return <div key={item.id} className="job-desc">
              {console.log("non sliced!")}
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          })
        } */}

      </article>
    </div>
    {showLink && <Link to="/about" className="btn center-btn">
      read more
    </Link>}
  </section>
}

export default Jobs