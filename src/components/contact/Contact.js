import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Connect</h2>
      <div className="container contact-container">
        <div className="contact-methods">
          <article className="contact-method">
            <h4>jonathan.d.mllr@gmail.com</h4>
            <a href="mailto:jonathan.d.mllr@gmail.com">Email Me</a>
          </article>
          <article className="contact-method">
            <h4>(678) 358-3300</h4>
            <a href="tel:678-358-3300">Call Me</a>
          </article>
          <article className="contact-method">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/jdmill/"
              target="_blank"
              rel="noreferrer"
            >
              Message Me
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <input type="submit"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
