import { LinkedInIcon, TwitterIcon, InstagramIcon, SubstackIcon, MailIcon } from '../components/SocialIcons';

function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact</h1>
      <div className="contact-layout">
        <div className="contact-left">
          <h3>Follow me on Social Media</h3>
          <div className="contact-social-icons">
            <a href="https://www.linkedin.com/in/nupur-bosmiya/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://x.com/nupurbosmiya" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/nupurbosmiya/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://nupurbosmiya.substack.com/" target="_blank" rel="noopener noreferrer">
              <SubstackIcon />
            </a>
          </div>
          <div className="email-section">
            <p>or email me</p>
            <div className="email-row">
              <MailIcon />
              <span>bosmiyanupur(at)gmail(dot)com</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Form submission not connected. Please email directly.'); }}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First name *</label>
                <input type="text" id="first-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last name *</label>
                <input type="text" id="last-name" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
