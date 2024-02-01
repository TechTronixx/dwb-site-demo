import React from "react";
import { Container } from "react-bootstrap";
// import telegram from "../images/icons/telegram.svg";
import twitter from "../images/icons/twitter.svg";

const Footer = () => {
  return (
    <div>
      <div className="text-center">
        <Container>
          <div className="d-flex justify-content-center mt-5 mb-3">
            {/* <a href="http://t.me/" target="_blank" rel="noreferrer">
              <div className="circle">
                <img src={telegram} alt="dwb telegram" />
              </div>
            </a> */}
            <a
              href="https://twitter.com/dwbs_nft"
              target="_blank"
              rel="noreferrer"
            >
              <div className="circle">
                <img src={twitter} alt="dwb twitter" />
              </div>
            </a>
          </div>
          <div className="mb-5">
            <a href="mailto:help@alephshib.com" className="mail">
              help@dwbs.com
            </a>
          </div>
        </Container>
      </div>
      <footer>
        <p className="mb-0">Copyright © 2024 Dwb's. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
