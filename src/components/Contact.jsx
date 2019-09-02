import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='contactStuff'>
        <h1>bonjour</h1>
        <a className="socialLinks" href="https://www.linkedin.com/in/jasmine-carpentier/">Linkedin</a>
        <a className="socialLinks" href="https://www.instagram.com/jas.carpentier/">Instagram</a>
        <a className="socialLinks" href="https://github.com/jascarpentier">Github</a>
        <main>
          <section id="contact-me">
            <div className="Contact-me">

              <label htmlFor="firsname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" placeholder="Your email.." />

              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

              <form method="post" action="mailto:jascarpentier@gmail.com" >
                <input type="submit" value="Submit" />
              </form>
            </div>
          </section>

        </main>
      </div >
    )
  }
}

export default Contact;