import { LinkedInIcon, TwitterIcon, InstagramIcon, MailIcon } from './SocialIcons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-label">Say Hi!</span>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/nupur-bosmiya/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://x.com/nupurbosmiya" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/nupurbosmiya/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:bosmiyanupur@gmail.com">
            <MailIcon />
          </a>
        </div>
      </div>
      <div className="footer-center">
        This website is designed by me. Please reach out if there are any broken links or pages.
      </div>
      <div className="footer-right">
        2025 | Nupur Bosmiya
      </div>
    </footer>
  );
}

export default Footer;
