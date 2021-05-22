import React from "react"
import Layout from "../components/Layout"
import emailjs from 'emailjs-com'

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_8l8xnsk', e.target, process.env.REACT_API_EMAILJS)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  console.log("should have been sent")
}



const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Get in touch</h3>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" placeholder="name" className="form-control" name="from_name" />
            <input type="email" placeholder="email" className="form-control" name="from_email" />
            <textarea className="form-control" rows="5" placeholder="message" name="message" />
          </div>
          <button type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
