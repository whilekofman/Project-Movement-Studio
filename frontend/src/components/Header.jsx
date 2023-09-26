import logo_gold from "../assets/LogoGold.png";
import logo_black from "../assets/LogoBlack.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [headerScrolled, setHeaderScrolled] = useState(false);
    const [homeScrolled, setHomeScrolled] = useState(false);
    const [programsScrolled, setProgramsScrolled] = useState(false);
    const [testimonialsScrolled, setTestimonialsScrolled] = useState(false);
    const [contactScrolled, setContactScrolled] = useState(false);

    // hamburger menu when mobile width
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Change header when scrolled
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { 
                setHeaderScrolled(true);
            } else {
                setHeaderScrolled(false);
            };

            const sectionPos = (sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    let marginTop = parseInt(getComputedStyle(section).marginTop, 10);
                    return section.offsetTop - marginTop;
                };

            };

            const homePos = 0;
            const programsPos = sectionPos('programs-section');
            const testimonialsPos = sectionPos('testimonials-section');
            const contactPos = 2758;

            if (offset === homePos) {
                setProgramsScrolled(false);
                setTestimonialsScrolled(false);
                setContactScrolled(false);
                setHomeScrolled(true);
            };

            if (offset > 0 && offset < programsPos) {
                setHomeScrolled(false);
                setTestimonialsScrolled(false);
                setContactScrolled(false);
                setProgramsScrolled(true);
            } else if (offset > programsPos && (offset > 2129 && offset < testimonialsPos)) {
                setHomeScrolled(false);
                setProgramsScrolled(false);
                setContactScrolled(false);
                setTestimonialsScrolled(true);

            } else if (offset > testimonialsPos && offset < 4695) {
                setHomeScrolled(false);
                setProgramsScrolled(false);
                setContactScrolled(false);
                setTestimonialsScrolled(true);
            };

            if (offset > 4595 || offset >= contactPos) {
                setHomeScrolled(false);
                setProgramsScrolled(false);
                setTestimonialsScrolled(false);
                setContactScrolled(true);
            };

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to sections
    const handleHome = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            let marginTop = parseInt(getComputedStyle(section).marginTop, 10);
            let scrollPos = section.offsetTop - marginTop - 230;
            window.scrollTo({top: scrollPos, behavior: 'smooth'});
        };
    };


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const showHamburger = windowWidth <= 1010;

    return (
        <div className={`header ${headerScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-left">
                <div className="header-logo">
                    <img src={headerScrolled ? logo_black : logo_gold} alt="header_logo" />
                </div>
                <div className="header-links">
                    <span 
                        onClick={handleHome}
                        className={`section ${homeScrolled ? 'scrolled' : ''}`}
                        >Home
                    </span>
                    <span 
                        onClick={() => handleScroll('programs-section')}
                        className={`section ${programsScrolled ? 'scrolled' : ''}`}
                        >Programs
                    </span>
                    <span 
                        onClick={() => handleScroll('testimonials-section')}
                        className={`section ${testimonialsScrolled? 'scrolled' : ''}`}
                        >Testimonials
                    </span>
                    <span 
                        onClick={() => handleScroll('contact-section')}
                        className={`section ${contactScrolled ? 'scrolled' : ''}`}
                        >Contact Us
                    </span>
                </div>
            </div>
            {!showHamburger && 
                <div className="reservation">
                    <a href="https://www.vagaro.com/projectmovementstudio/services" target="_blank">BOOK NOW</a>
                </div>
            }
            {showHamburger && 
                <IconContext.Provider value={{className: "header-hamburger"}}>
                    <div onClick={toggleMobileMenu}><AiOutlineMenu /></div>
                </IconContext.Provider>
            }
            <div id="mobile-menu" className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <IconContext.Provider value={{className: "mobile-close"}}>
                    <div onClick={toggleMobileMenu}>
                        <AiOutlineClose />
                    </div>
                </IconContext.Provider>
                <div>
                    <span 
                        className={`mobile-span ${homeScrolled ? 'scrolled' : ''}`}
                        onClick={handleHome}
                        >Home
                    </span>
                    <span 
                        className={`mobile-span ${programsScrolled ? 'scrolled' : ''}`} 
                        onClick={() => handleScroll('programs-section')}
                        >Programs
                    </span>
                    <span 
                        className={`mobile-span ${testimonialsScrolled ? 'scrolled' : ''}`} 
                        onClick={() => handleScroll('testimonials-section')}
                        >Testimonials
                    </span>
                    <span 
                        className={`mobile-span ${contactScrolled ? 'scrolled' : ''}`} 
                        onClick={() => handleScroll('contact-section')}
                        >Contact Us
                    </span>
                </div>
            </div>
      </div>
    );
};

export default Header;