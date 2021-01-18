import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import facebook from "./img/facebook.svg"
import twitter from "./img/twitter.svg"
import youtube from "./img/youtube.svg";
import "./styles/footer.css";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="" className="font-small">
        <Container fluid className="text-center text-md-left" id="myfooter">
          <Row className="d-flex align-items-center">
            <Col md="4">
              <h4 className="font-weight-bold h4-responsive">
                MAIRIE D'ABOISSO
              </h4>
              <p className="font-weight-bold">
                Aboisso une cité en marche.
              </p>
            </Col>
            <Col md="4 my-3">
              <ul>
                <li className="list-unstyled">
                  <span className="d-flex flex-row">
                    <i className="fa fa-phone mx-2 fa-2x" />
                    <p className="descriptn">
                      (+225) 21 30 41 23 / 21 30 68 15{" "}
                    </p>
                  </span>
                </li>
                <li className="list-unstyled">
                  <span className="d-flex flex-row">
                    <i className="fa fa-envelope-o mx-2 fa-2x" />
                    <p className="descriptn">contact@mairieaboisso.com</p>
                  </span>
                </li>
              </ul>
            </Col>
            <Col md="4 my-2">
              <h4 className="font-weight-bold h4-responsive"> </h4>
              <span className="d-flex flex-row justify-content-around">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="facebook"
                    src={facebook}
                    className="img-fluid social"
                  />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="facebook"
                    src={twitter}
                    className="img-fluid social"
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="facebook"
                    src={youtube}
                    className="img-fluid social"
                  />
                </a>
              </span>
            </Col>
          </Row>
        </Container>
        <div
          className="footer-copyright text-center black-text font-weight-bold py-3"
          id="myfooter2"
        >
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright :{" "}
            <a
              href="https://mairieaboisso.com/"
              className="black-text font-weight-bold"
            >
              {" "}
              Mairie Aboisso{" "}
            </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
