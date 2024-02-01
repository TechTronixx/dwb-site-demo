import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import longetivity from "../images/dwb2.jpg";
import banner from "../images/dwb1.png";
import fun from "../images/dwb3.jpg";
import community from "../images/dwb4.jpg";

const Vision = () => {
  return (
    <div id="vision" className="about-section">
      <Container>
        <div className="text-center">
          <h3 className="section-title">Visison & Goals</h3>
        </div>

        {/* Section 1 */}
        <Row>
          <Col md={6} className="mb-4">
            <div
              className="section-inner"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div>
                <h4>Dedication</h4>
                <p>
                  Embodying the spirit of innovation, dwb's Project is designed
                  to be a guiding companion for every community member embarking
                  on a journey through our unique universe.
                </p>
                <p>
                  dwb's is loyal to Solana Furry community, and will introduce
                  new participants to the blockchain’s innovations with a warm
                  smile and a helping hand!
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              className="token-image"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src={banner} alt="dwb1" />
            </div>
          </Col>
        </Row>

        {/* Section 2 */}
        <Row>
          <Col md={6} className="mb-4 order-md-last">
            <div
              className="section-inner"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="text-justify">
                <h4>Longevity</h4>
                <p>dwb's is a long-term dedicated project to the community.</p>
                <p>
                  Inspired by the success of Pudgy Penguins and Claynosaurs, we
                  took a departure from common human PFPs, introducing a fun &
                  distinctive collection of furry lizards.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div
              className="token-image"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src={longetivity} alt="dwb2" />
            </div>
          </Col>
        </Row>

        {/* Section 3 */}
        <Row>
          <Col md={6} className="mb-4">
            <div
              className="section-inner"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div>
                <h4>Fun!</h4>
                <p>
                  While blockchain and cryptocurrency technology may seem
                  daunting, dwb's believes it doesn't have to be a source of
                  fear!
                </p>
                <p>
                  dwb's Project aims to help everyone recognize that the crypto
                  space is a realm for creativity, collaboration, and
                  connection. It's a place where people's talents and skills can
                  shine, and where everyone has something to enjoy!
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              className="token-image"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src={fun} alt="dwb3" />
            </div>
          </Col>
        </Row>

        {/* Section 4 */}
        <Row>
          <Col
            md={6}
            className="mb-4 order-sm-first order-md-last order-lg-last ms-auto"
          >
            <div
              className="section-inner"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div>
                <h4>Furry Lizard's Realm</h4>
                <p>
                  Explore the dwb's realm, a haven of triumph where these furry
                  reptiles embrace only victories. No losses, no complaints—just
                  strutting their stuff and walking the walk. These creatures
                  boast Pepe's meme potential, coupled with the pixel-perfect
                  simplicity of Punks.
                </p>
                <p>
                  Returning to the fundamentals, this art-centric project
                  prioritizes IP rights/ownership for its holders. These
                  resilient furry lizards are geared up to conquer the Solana
                  landscape!
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              className="token-image"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img src={community} alt="dwb4" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;
