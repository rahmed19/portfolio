import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaSleigh } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiEducations {
      nodes {
        category
        date
        degree
        education {
          id
          name
        }
        strapiId
        id
        school
      }
    }
  }
`

const Education = ({ showLink }) => {
  const data = useStaticQuery(query)
  const { allStrapiEducations: { nodes: educations } } = data
  const [value, setValue] = useState(0)
  const { school, degree, date, education } = educations[value]

  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {educations.map((item, index) => {
          return <button
            key={item.strapiId}
            className={`job-btn ${index === value && 'active-btn'}`}
            onClick={() => setValue(index)}
          >{item.category}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{school}</h3>
        <h4>{degree}</h4>
        <p className="job-date">{date}</p>

        {showLink ?
          //Show 7 items from experiences
          education.slice(0, 7).map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          }) :
          //Show all experiences
          education.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          })
        }

      </article>
    </div>
    {showLink && <Link to="/about" className="btn center-btn">
      read more
    </Link>}
  </section>
}

export default Education