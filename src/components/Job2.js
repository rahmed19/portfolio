import React, { useState } from "react"
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
        desc2 {
            id
            name2
          }
      }
    }
  }
`

const Job2 = ({ value }) => {
    const data = useStaticQuery(query)
    const { allStrapiJobs: { nodes: jobs } } = data
    const { company2, position2, date2, desc2 } = jobs[value]

    return <div className="jobs-center">
        <div>
        </div>
        <article className="job-info">
            <h3>{position2}</h3>
            <h4>{company2}</h4>
            <p className="job-date">{date2}</p>

            {
                desc2.map((item) => {
                    return <div key={item.id} className="job-desc">
                        <FaAngleDoubleRight className="job-icon" />
                        <p>{item.name2}</p>
                    </div>
                })
            }

        </article>
    </div>

}

export default Job2