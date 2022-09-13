import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="colomns">
          <div className="colomn">
            <p>About me</p>
            <a href="https://github.com/Mihoub2">
              <span>Git hub</span>
            </a>
            <a href="https://www.linkedin.com/in/mihoub/">
              <span>Linkedin</span>
            </a>
          </div>
          <div className="colomn">
            <p>Thank's to</p>
            <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20reacteur&utm_content=377851505166&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ36mY-mbrLdAotUOxmxHaqJiV0KrmDPG1iMuv1GkNt3JyQhlBqLqyt8aAv5HEALw_wcB">
              <span>Le Reacteur</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
