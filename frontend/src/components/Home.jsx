import { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Credentials from "./Credentials";
import Footer from "./Footer";
import Header from "./Header";
import Programs from "./Programs";
import Testimonials from "./Testimonials";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IconContext } from 'react-icons';


const Home = () => {
  const bannerRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (bannerRef.current && !bannerRef.current.contains(e.target)) {
        setShowBanner(false);
      };
    };

    if (showBanner) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    };

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showBanner]);

  const handleNewsButton = () => {
    setShowBanner(!showBanner); 
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby8i7q_MgHBxcxHhSYVk5EzOZ4hLaYa7L6of_7dkyTDEpyxorhVjbi0UPz3IZWcPpkJ/exec', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({action: 'add', Email: email})
      });


    } catch(error) {
      console.error(error);
    };
    setShowBanner(false);
  };

  return (
    <div className="home-container">
        <Header />
        <About /> 
        <Programs />
        <Credentials />
        <Testimonials />
        <Contact />
        <Footer />
        <div className="newsletter-button" onClick={handleNewsButton}>
          <ImNewspaper />
        </div>
        <div className={`newsletter-banner ${showBanner ? "show" : ""}`} ref={bannerRef}>
          <div className="banner-body">
        <IconContext.Provider value={{style: {size: "10px"}}}>
            <div className="banner-close" onClick={() => setShowBanner(false)}>
              <AiOutlineCloseCircle />
            </div>
          </IconContext.Provider>
          <div className="banner-main">

            <div className="banner-text">
              <span>SUBSCRIBE FOR WEEKLY NEWSLETTERS</span>
            </div>
            <div className="banner-right">
              <div className="banner-form">
                <input type="text" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <div className="banner-button" onClick={handleSubscribe}>Submit</div>
              </div>

              <div className="banner-ubsub">
                <p>
                  Click 
                  <span> Here </span>
                  to Unsubscribe
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

    </div>
  );
};

export default Home;