import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/Profile.png"
import './about.style.css'
const About = () => {
    return (
        <div id='about'>
        <div className="about">
        <h1 className="title text-center">ABOUT ME</h1>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                    <Image className= "profile justify-content-end" src={Profile}  roundedCircle fluid />
                    </Row>

                </Col>
                <Col xs={12} md={6}>
                <Row className=" align-items-start justify-content-center p-2 my-details rounded">   
                Hello! I am Udit, a Computer Engineer based in Gainesville, Florida. I am currently pursuing my masters degree in Computer Science. I am looking for full time opportunities starting May 21'. After my intern period at Micro Focus where I deployed Apache Pulsar on Google Cloud Platform, I am learning and exploring more about the cloud.
                <Col className="d-flex justify-content-center flex-wrap">
                  {/*<div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>*/}
                  <div>
                    <a href="https://drive.google.com/file/d/1TYQWcu3QIAlpmZVhNjXI_G9cqh5olbIE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/uditjaitly" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default About