import temp_headshot from "../assets/LogoGold.png";
import { BsInstagram, BsArrowUpRightSquare } from "react-icons/bs";
import { IconContext } from 'react-icons';

const NewsLetterLandingPage = () => {

  return (
    <div className='newsletter-container'>
      <div className="newsletter-main">
          <div className="newsletter-headshot">
            <img src={temp_headshot} alt="headshot" />
          </div>

          <div className="newsletter-details">
            <span id='newsletter-title'>Welcome to Project MVMT!</span>
            <span id='newsletter-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi et eligendi molestiae animi magni iusto perspiciatis repellat laboriosam necessitatibus adipisci voluptatibus reiciendis illo, libero rerum hic? Magnam, voluptates inventore?</span>
            <div className='newsletter-form'>
              <form action="#">
                <input type="text" placeholder='Email Address' />
                <button type="submit">Subscribe</button>
              </form>
              <div>We respect your privacy. <span id="unsub">Unsubscribe</span> at any time.</div>
            </div>
          </div>
      </div>

      <div className="social-links">
        <div className="socials-link">
          <IconContext.Provider value={{style: {size: "20px"}}}>
            <div className="social-icon">
              <BsInstagram />
            </div>
          </IconContext.Provider>
          <span>Follow us on Instagram</span>
        </div>
        <div className="socials-link">
        <IconContext.Provider value={{style: {size: "20px"}}}>
            <div className="social-icon">
              <BsArrowUpRightSquare />
            </div>
          </IconContext.Provider>
          <span>Visit our website</span>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterLandingPage