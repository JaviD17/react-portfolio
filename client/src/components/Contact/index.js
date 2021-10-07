import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3 className="contact-title"> Contact Form</h3>
      <form className="contact-form">
        <label htmlFor="name" className="contact-form-text">Name</label>
        <input name="name" type="text" required placeholder="Name" />
        <br></br>
        <label htmlFor="email" className="contact-form-text">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="example@domain.com"
        />
        <br></br>
        <label htmlFor="message" className="contact-form-text">Message</label>
        <br></br>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter your message here ..."
          required
        ></textarea>
        <div className="submit-btn-container">
          <input className="submit-btn" type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default Contact;
