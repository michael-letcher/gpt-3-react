import logo from '../../assets/logo.svg';
import './footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>

        <div>
          <button className="gpt3__footer-heading_button">
            Request Early Access
          </button>
        </div>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__footer-links_list">
          <h4>Links</h4>
          <a href="#">Overons</a>
          <a href="#">Social Media</a>
          <a href="#">Counter</a>
          <a href="#">Contact</a>
        </div>

        <div className="gpt3__footer-links_list">
          <h4>Company</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>

        <div className="gpt3__footer-links_list">
          <h4>Get in touch</h4>
          <p>33 Cedarwood Rd, Waterdeep</p>
          <a href="#">+61 085-132-567</a>
          <a href="#">sending@message.spell</a>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <span>© {year} GPT-3. All rights reserved.</span>
      </div>
    </footer>
  );
}
