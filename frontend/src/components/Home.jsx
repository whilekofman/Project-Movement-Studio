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
  const [showUnsub, setShowUnsub] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('SUBSCRIBE FOR WEEKLY NEWSLETTERS');

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

  const handleToggle = () => {
    setShowUnsub(!showUnsub);
    if (showUnsub === false) {
      setMessage('SUBSCRIBE FOR WEEKLY NEWSLETTERS');
    } else {
      setMessage(`We're sorry to see you go.`);
    };
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (showUnsub === false) {
      try {
        console.log("sub")
        const response = await fetch('https://sheetdb.io/api/v1/df7y3heuarkyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({action: 'add', Email: email})
        });

        if (response.ok) {
          setMessage('Subscribed to Newsletter!');
        } else {
          setMessage('Error subscribing to Newsletter, please let us know!')
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("remove");
      try {
        const response = await fetch('https://sheetdb.io/api/v1/df7y3heuarkyp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({action:'remove', Email: email})
        });
        if (response.ok) {
          setMessage('Unsubscribed from Newsletter!');
        } else {
          setMessage('Error subscribing to Newsletter, please let us know!');
        };
      } catch (error) {
        console.error(error);
      }
    }

    setEmail("");
    setMessage("SUBSCRIBE FOR WEEKLY NEWSLETTERS")
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
              <span>{message}</span>
            </div>
            <div className="banner-right">
              <div className="banner-form">
                <input type="text" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <div className="banner-button" onClick={handleSubscribe}>
                  SUBMIT
                </div>
              </div>

              <div className="banner-unsub">
                <p>
                  Click 
                  <span className="banner-toggle" onClick={handleToggle}> Here </span>
                  to 
                  {!showUnsub ? 
                    <span> Unsubscribe</span> :
                    <span> Subscribe</span>
                  }
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