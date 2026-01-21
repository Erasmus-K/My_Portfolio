import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a motivated Software Developer passionate about solving
              real-world problems through technology and improving community
              lives through innovation.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across frontend, backend, and networking.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Cybersecurity, AI/ML, Networking (MikroTik/WiFi ISP),{" "}
                </b>
              </i>
              and building PropTech and SaaS solutions.
              <br />
              <br />
              I love building projects with
              <b className="purple"> React.js, Flask, </b>and{" "}
              <i>
                <b className="purple">Express.js</b>, while exploring{" "}
                <b className="purple">AI-driven analytics</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
