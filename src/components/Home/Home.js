import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



function Home() {
  return (
    <section>
    <Container fluid className="about-section">
    <Container>

          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                
              </h1>

              <h1 className="heading-name">
                I'M
                <strong > MERBAH HOUDA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left",color:"yellow" }}>
                <strong > Engineering Student</strong>
              </div>
            </Col>

            <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span > INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Programming captured my heart, and it seems I've acquired a decent amount of knowledge, or so I believe...
              <br />The realms of
              <i>
                <b style={{color:"yellow" }}> Javascript, Java and Python </b>
              </i>flow through me effortlessly.


              
              My passion lies in crafting innovative web technologies and products, as well as exploring the intricacies of Deep Learning and Natural Language Processing.

When the opportunity arises, I embrace my fervor for creating masterpieces with Node.js, accompanied by contemporary Javascript libraries and frameworks such as  &nbsp;
              <i>
                <b style={{color:"yellow" }}> React.js</b> and
                also in areas related to{" "}
                <b style={{color:"yellow" }}>
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br /> <br />
              <br />
              
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Feel free to <span style={{color:"yellow" }}>connect </span>with me</h1>
            <br />
            <ul >
              <li className="social-icons">
                <a
                href="https://github.com/AcetaCrenu/"
                className="home-social-icons"

                  
                  
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                href="https://www.linkedin.com/in/houda-merbah-33bb05233/"
                target="_blank"
                  rel="noreferrer"
                  className=" home-social-icons"

                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="https://instagram.com/aceta_crenu?igshid=Y2M0YTlkZGNmOQ=="
                target="_blank"
                  rel="noreferrer"
                  className=" home-social-icons"

                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
       


            
          </Row>
          </Container>
        </Container>
    </section>
  );
}

export default Home;
