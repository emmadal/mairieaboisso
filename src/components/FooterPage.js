import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="green" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="4">
              <h4 className="title font-weight-bold h4-responsive">MAIRIE D'ABOISSO</h4>
              <p className="font-weight-bold">Le vrai changement avec Jeremie Alfred N'Gouan</p>
            </Col>
            <Col md="4">
              <h4 className="title font-weight-bold h4-responsive"> </h4>
              <p className="font-weight-bold"> </p>
            </Col>
            <Col md="4">
            <h4 className="title text-center font-weight-bold h4-responsive">CONTACT</h4>
            <ul>
              <li className="list-unstyled">
                <h5 className="font-weight-bold h5-responsive text-center"> +225 00 00 00 00</h5>
              </li>
              <li className="list-unstyled">
                <h5 className="font-weight-bold h5-responsive text-center"> +225 00 00 00 00</h5>
              </li>
              <li className="list-unstyled">
              <h5 className="font-weight-bold h5-responsive text-center"> +225 00 00 00 00</h5>
              </li>
            </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> Mairie Aboisso </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
