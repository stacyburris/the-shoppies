import '../Footer/footer.scss';
import MyButton from '../../Reusables/buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="Footer" >
      <footer>
        <h3>Made with<span><FontAwesomeIcon 
        className='heart' icon={farHeart} size="1x" />
        <span>by Stacy Burris</span></span>
       </h3>
        <div id="site-info">
        <p id="Footer">
          <p>Connect With Me</p>
          <MyButton ><a className='link-color' id='link-color'
       href="mailto:stacy1burris@gmail.com">Email</a></MyButton>
           </p>
        </div>
       <div className="contact-link">
         <a id="icon" href="https://twitter.com/stacyjaneb"
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a id="icon" href="https://www.instagram.com/stacyjburris/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a id="icon" href="https://github.com/stacyburris"
            className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a id="icon" href="https://www.linkedin.com/in/stacyjburris/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          </div>
      </footer>
    </div>
  );
}

export default Footer;