import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='contactStuff'>
        <div id="hero-photo" />

        <main>
          <section id="contact-me">
            <div className="Contact-me">
              <h1 className='contactHeader'>
                Contact
              </h1>
              <h2 className='contactSub'>Send me an email</h2>

              <label htmlFor="firstname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" placeholder="Your email.." />

              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" cols="20" rows="5" placeholder="Write something.."></textarea>

              <form method="post" action="mailto:jascarpentier@gmail.com" >
                <input type="submit" value="Submit" />
              </form>

              <h2 className='socialTitle'>Follow me here</h2>
              <div className='contactLinks'>
                <a className="socialLinks" href="https://www.linkedin.com/in/jasmine-carpentier/">Linkedin</a>
                <a className="socialLinks" href="https://www.instagram.com/jas.carpentier/">Instagram</a>
                <a className="socialLinks" href="https://github.com/jascarpentier">Github</a>
              </div>
            </div>
          </section>

        </main>
      </div >
    )
  }
}

export default Contact;