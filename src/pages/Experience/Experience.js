import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Card, CardDeck,Row,Col,Button, Accordion} from "react-bootstrap/";
import L_MICROFOCUS from "../../assets/img/experience/microfocus.png";
import L_OPEXGURU from "../../assets/img/experience/opexguru.png";
import Tilt from "react-tilt";
import "./my-experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="title text-center">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <CardDeck>
            <Row>
            <Col md={6}>
        <Container>
          <Tilt options={{ max: 15 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_MICROFOCUS} alt="MicroFocus logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Intern - Software Development Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Job Description
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Card.Text className="text-center style">
                    <strong className="body-title-style ">Intern Software Development Engineer</strong>
                    <br />
                    <strong>Technology:</strong> Google Cloud Platform, Apache Pulsar, Kubernetes, Docker, Grafana
                    <br />
                    <strong>Duration:</strong> May 2020 - Aug 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Deployed ApachePulsar </strong>   – a pub-sub messaging system on Google Cloud Platform</li>
                      <li><strong>Evaluated </strong> performance of Pulsar deployed on multiple clusters using Grafana and Prometheus.
                      </li>
                      <li><strong>Recommended </strong> out of box solutions like geo-replication and elastic file storage that improved the deployment
                      </li>
                    
                      

                    </ul>
                    
                    
                  </Card.Text>
      </Card.Body>
    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
        </Container>
        </Col>
        <Col md={6}>
        <Container>
          <Tilt options={{ max: 15 }}>
          <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_OPEXGURU} alt="OpexGuru logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Intern - Data Analyst</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Job Description
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <Card.Text className="text-center style">
                    <strong className="body-title-style ">Intern Technical Data Analyst</strong>
                    <br />
                    <strong>Technology:</strong> Jupyter (Python), Tableau
                    <br />
                    <strong>Duration:</strong> July 2018 - Jan 2019
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Leveraged <strong>Data Analytics </strong> and proposed potential solutions to reduce supply chain inefficiencies</li>
                      <li>Conducted assessments of consulting assignments to ensure better client value creation
                      </li>
                      <li>Applauded for data-driven insights that improved order cancellation metric of the key client
                      </li>
                    
                      

                    </ul>
                    
                    
                  </Card.Text>
                  </Card.Body>
    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
        </Container>

        </Col>
        </Row>
        </CardDeck>
      </Jumbotron>
     
    </div>
  );
};

export default Experience;