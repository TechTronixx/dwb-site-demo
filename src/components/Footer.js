import React from "react";
import { Container } from "react-bootstrap";
// import telegram from "../images/icons/telegram.svg";
import twitter from "../images/icons/twitter.svg";
import { FaDiscord, FaCode, FaHeart } from "react-icons/fa";

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
            <a href="https://magiceden.io/" target="_blank" rel="noreferrer">
              <div className="circle">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.92984 0.0833004C1.55534 0.208426 1.22946 0.465524 1.0174 0.803187L0.82971 1.10212L0.810616 5.95123C0.793486 10.3072 0.802762 10.828 0.901887 11.0722C1.1499 11.6834 1.64512 12 2.35315 12C2.88764 12 3.21717 11.8559 3.62119 11.4456C4.10165 10.9576 4.11356 10.8696 4.11356 7.80961C4.11356 5.45922 4.12623 5.1272 4.21587 5.1272C4.27207 5.1272 5.01381 5.76861 5.8641 6.55252C6.81702 7.43106 7.5042 8.0146 7.65546 8.07381C7.79047 8.12661 8.08588 8.16978 8.31202 8.16978C9.04686 8.16978 9.08193 8.13903 10.792 5.99655C11.6328 4.94318 12.3748 4.02838 12.4409 3.96373C12.5572 3.85008 12.5927 3.88063 13.5002 4.87498C14.0166 5.44084 14.4488 5.94261 14.4608 5.99009C14.4727 6.0375 13.9685 6.72563 13.3402 7.51923C11.5974 9.72079 11.4214 9.97764 11.3245 10.461C11.2223 10.9708 11.5909 11.5579 12.1709 11.8093C12.4677 11.9379 12.5837 11.9417 16.6735 11.9596C20.4271 11.9759 20.9021 11.9669 21.1618 11.8742C22.1702 11.5141 22.5127 10.3407 21.8078 9.66121C21.3359 9.20628 21.4229 9.21915 18.5693 9.18397C16.2474 9.15538 15.9964 9.1422 15.9964 9.0487C15.9964 8.99171 16.4051 8.49273 16.9048 7.93987C17.9564 6.77615 18.1655 6.42568 18.1098 5.92011C18.0556 5.4286 17.8773 5.15908 16.8901 4.07567C16.3986 3.53618 15.9964 3.04576 15.9964 2.98586C15.9964 2.88539 16.1952 2.87449 18.5693 2.84526C21.4055 2.81034 21.3236 2.82194 21.7651 2.3911C22.4807 1.6927 22.2814 0.634261 21.3453 0.16133C21.0757 0.0251113 21.0551 0.0245408 16.6058 0.0245408H12.137L11.8243 0.196637C11.5624 0.340779 11.2454 0.70874 9.87256 2.46272C8.9711 3.6144 8.21073 4.55671 8.1829 4.55671C8.15501 4.55671 7.0668 3.57732 5.76456 2.38032C3.70075 0.483209 3.35442 0.190361 3.06605 0.0983867C2.67165 -0.0274365 2.27698 -0.0326978 1.92984 0.0833004Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
            <a href="https://discord.gg/dwbs" target="_blank" rel="noreferrer">
              <div className="circle">
                <FaDiscord size={20} color="white" />
              </div>
            </a>
          </div>
          <div className="mb-5">
            <a href="mailto:dubsdwb@gmail.com" className="mail">
              dubsdwb@gmail.com
            </a>
          </div>
        </Container>
      </div>
      <footer className="text-center py-4 bg-gray-900 text-white">
        <p className="mb-0 inline-flex">
          <span className="mr-1">&copy; 2024 dwb's. All Rights Reserved.</span>
          <span className="mx-1">
            Built with <FaHeart className="text-red-500" /> by PRNT Inc
          </span>
          <span className="mx-1">
            <FaCode className="text-blue-500" /> TechTronix
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
