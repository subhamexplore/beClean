import React from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/footLogo.png";

function Footer() {
  return (
    <div className="footer" id="footer-back">
      <div className="footerContainer">
        <div className="onee footerSubContainer">
          <div className="footerHeadd" id="astro">
            Let’s make something great 
          </div>
          <div className="footerHeadd" style={{marginTop:'-50px'}} id="astro">
            work together
          </div>
          <div className="cont-foot">
            <div className="footerContentSet">
              <div className="footerHighlightTextOne">CALL OUR OFFICE</div>
              <a
                href="tel:9777798142"
                className="footerNormalText"
                style={{ textDecoration: "none" }}
              >
                + 123 456 78910
              </a>
            </div>
            <div className="footerContentSet smss">
              <div
                className="footerHighlightTextOne"
                style={{ marginRight: "10px" }}
              >
                SEND A MESSAGE
              </div>
              <a
                href="mailto:orivesolutions@gmail.com"
                className="footerNormalText footerEmail"
                style={{ textDecoration: "none" }}
              >
                info@domain.com
              </a>
            </div>
          </div>
        </div>
        <div className="twoo">
          <div className="footerSubContainer">
            <div className="footerHead">COMPANY</div>
            <div>
              <div className="footerNormalText">Info</div>
              <div className="footerNormalText">Services</div>
              <div className="footerNormalText">Projects</div>
              <div className="footerNormalText">Gallery</div>
              <div className="footerNormalText">Company</div>
            </div>
          </div>
          <div className="threee footerSubContainer">
            <div className="footerHead">FOLLOW US</div>
            <div>
              <div className="footerNormalText">Pinterest</div>
              <div className="footerNormalText">Instagram</div>
              <div className="footerNormalText">Dribbble</div>
              <div className="footerNormalText">Behance</div>
              <div className="footerNormalText">Twitter</div>
            </div>
          </div>
        </div>
        <div className="footerSubContainer">
          <div>
            <img src={logo} alt="" className="footer-logo" />
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <div className="fot">
          This website is protected by reCAPTCHA and the Google Privacy Policy
          and Terms of Service apply. You may not use this website if you do not
          agree to these terms and conditions.
        </div>
        <div className="foooot">© 2024 All copyrights reserved by BeClean</div>
      </div>
      <div />
    </div>
  );
}

export default Footer;
