import React from 'react'

class EmailForm extends React.Component {
  render() {
    return (
      <div className="email-form-container" id="email-form-container">
      <h1 id="email-form-title">HEY!</h1>
        <form method="POST" action="https://script.google.com/macros/s/AKfycbwmf_2NITKOXqDaHRe_NEkSka34j9KNQ-gpEFsHXPoUF6Hmu1s/exec" target="_blank">
          <input type="email" name="email" placeholder="Your Email" label="email" rrequired/>
          <br/><input type="text" name="name" placeholder="Your Name" label="name" rrequired/>
          <br/>
          <textarea name="message" rows="6" placeholder="Your Message..." label="message" required></textarea>
          <br/>
          <button id="email-send-btn" type="submit">SEND</button>
        </form>
      </div>
    )
  }
}
export default EmailForm