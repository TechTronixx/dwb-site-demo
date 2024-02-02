import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Roadmap = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using JavaScript method to get PDF file
    fetch("dwb-wp.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating a new object of the PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "dwb-wp.pdf";
        alink.click();
      });
    });
  };

  return (
    <div id="roadmap" className="about-section dark_bg">
      <Container
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="text-center">
          <h3 className="section-title text-white">Roadmap</h3>
        </div>
        <Row>
          <Col md={4} className="mb-4">
            <div
              className="section-inner section-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="w-100">
                <h4 className="text-white">Phase 1</h4>
                <ul type="disc">
                  <li className="text-white">Curate a fun community</li>
                  <li className="text-white">Mint via $PRNT Launchpad</li>
                  <li className="text-white">
                    Mint 555 supply to establish a strong foundation.
                  </li>
                  <li className="text-white">
                    Immediately purchase IP rights/ownership
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div
              className="section-inner section-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="w-100">
                <h4 className="text-white">Phase 2</h4>
                <ul type="circle">
                  <li className="text-white">Staking Rewards Activation.</li>
                  <li className="text-white">Art Upgrade</li>
                  <li className="text-white">Prepare for NFTNYC</li>
                  <li className="text-white">
                    Purchase IP Licensing/Ownership
                  </li>
                  <li className="text-white">Ecosystem Collaboration</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div
              className="section-inner section-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="w-100">
                <h4 className="text-white">Phase 3</h4>
                <ul type="circle">
                  <li className="text-white">TBD</li>
                  <li className="text-white">TBD </li>
                  <li className="text-white">TBD</li>
                  <li className="text-white">TBD </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <div className="whitepaper w-100 pt-5">
          <div className="text-center">
            <h3 className="section-title text-white">Whitepaper</h3>
            <div className="d-flex justify-content-center">
              <div
                onClick={onButtonClick}
                className="buy-now-btn hvr-back-pulse"
                style={{ width: 225 }}
              >
                (Comming Soon!)
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;
