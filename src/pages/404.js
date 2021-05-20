import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
    <main className="error-page">
      <div className="error-container">
        <h3>Ooops. This non-existent page is stuck in second gear.</h3>
        <Link to="/" className="btn">
          Go to 5th gear...
        </Link>
      </div>
    </main>
  </Layout>
}

export default Error
