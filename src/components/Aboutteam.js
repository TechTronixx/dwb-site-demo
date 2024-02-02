import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import teamImage from "../images/team1.jpeg";

const AboutTeam = () => {
  const teamMembers = [
    { name: "Dwbby", role: "Founder" },
    { name: "Zap", role: "Advisor" },
    { name: "Shan", role: "Social Media Director" },
    { name: "ShilliBilli", role: "Community Manager" },
  ];

  return (
    <div id="team" className="bg-gray-900 py-16">
      <Container
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="text-center ">
          <h3 className="text-5xl text--txt-color font-bold mb-4">
            The Lizard Family
          </h3>
        </div>
        <Row className="gap-6">
          <Col md={6} className="mb-4">
            <div className="bg-opacity-2 rounded-lg shadow-md p-6">
              <div>
                <h4 className="text-4xl font-bolder mb-2 text-gray-800">
                  Team
                </h4>
                <p className="text-gray-600">
                  We are a dedicated team of professionals passionate about
                  creating innovative solutions.
                </p>
                <p className="text-gray-600">
                  Collaborating across various domains, our diverse team brings
                  unique perspectives to every project.
                </p>
                <p className="text-gray-600">
                  Together, we strive to deliver exceptional experiences and
                  drive success for our clients.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="bg-opacity-30 bg-white rounded-lg shadow-md overflow-hidden">
              {/* <div className="team-image"> */}
              {/* <img
                  src={teamImage}
                  alt="team"
                  className="w-full h-auto object-cover rounded-lg"
                /> */}
            </div>
            {/* </div> */}
          </Col>
        </Row>
        <Row className="mt-8">
          {teamMembers.map((member, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="bg-opacity-110 bg-white rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutTeam;
