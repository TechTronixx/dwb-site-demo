import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import metaverse from "../images/alephshib-nft.jpg";
// import fun from '../images/fun.jpg'

const Metaverse = () => {
  return (
    <div id="metaverse" className="about-section">
      <Container
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="text-center">
          <h3 className="section-title">Enter the dwb Metaverse</h3>
        </div>
        <Row>
          <Col md={6} className="mb-4">
            <div
              className="section-inner"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div>
                <p>The utility of the Alephshib token won't stop there!</p>
                <p>
                  2% of the transaction tax is used for marketing and community
                  rewards.
                </p>
                <p>
                  Beyond the basics, the Alephshib project is using innovative
                  ways to expand while reaching new users, investors and
                  traders.
                </p>
                <p>What you can expect from us:</p>
                <ul className="text-start">
                  <li>Competitions and contests (Twitter, Tiktok...)</li>
                  <li>dwb's launch</li>
                  <li>dwb'sshib Portfolio Tracker</li>
                  <li>dwb'sshibMerch, And more to come</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              className="token-image"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src={metaverse} alt="dwb" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Metaverse;
