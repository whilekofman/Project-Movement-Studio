import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-left">© PRJCT MVMT Studio LLC All Rights Reserved.</div>
        <div className="footer-mid">
            <span className='footer-title'>Follow Us</span>
            <a href="https://www.instagram.com/projectmovement.studio/" target='_blank'>Instagram</a>
        </div>
        <div className="footer-right">
            <span className='footer-title'>Contact Us</span>
            <span>For all inquiries please contact us at our email below.</span>
            <span>projectmovementstudio@gmail.com</span>
        </div>
    </div>
  );
};

export default Footer;