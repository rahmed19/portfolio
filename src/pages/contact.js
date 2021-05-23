import React, { useState } from "react"
import Layout from "../components/Layout"
import emailjs from 'emailjs-com'


const Contact = () => {

  const [success, setSuccess] = useState(false)

  function sendEmail(e) {
    e.preventDefault()
      //test
      .then((result) => {
        console.log(result.text, result.status);
        document.getElementById("name").disabled = true
        document.getElementById("email").disabled = true
        document.getElementById("text-area").disabled = true
        document.getElementById("submit-button").disabled = true
        setSuccess(true)
      }, (error) => {
        console.log(error.text);
      })
    document.getElementById("contact-form").reset()


  }

  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Get in touch</h3>
        <form id="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input required id="name" type="text" placeholder="name" className="form-control" name="from_name" style={{ disabled: "true" }} />
            <input required id="email" type="email" placeholder="email" className="form-control" name="from_email" />
            <textarea required id="text-area" className="form-control" rows="5" placeholder="message" name="message" />
          </div>
          <button id="submit-button" type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>
        {success ? <h3>Your message has been sent!<br /> Thank you.</h3> : null}
      </article>

    </section>

  </Layout>
}

export default Contact
