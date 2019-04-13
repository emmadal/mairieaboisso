import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './styles/footer.css'

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left" id="myfooter">
          <Row className="d-flex align-items-center">
            <Col md="4 my-3">
              <h4 className="title font-weight-bold h4-responsive">MAIRIE D'ABOISSO</h4>
              <p className="font-weight-bold">Le vrai changement avec Jeremie Alfred N'Gouan</p>
            </Col>
            <Col md="4 my-3">
              <ul>
                <li className="list-unstyled">
                <span className="d-flex flex-row">
                  <i className="fa fa-phone mx-2 fa-2x"></i>
                  <p className="descriptn">(+225) 21 30 41 23 / 21 30 68 15 </p>
                </span>
                </li>
                <li className="list-unstyled">
                  <span className="d-flex flex-row">
                  <i className="fa fa-envelope-o mx-2 fa-2x"></i>
                  <p className="descriptn">aboissomairie@yahoo.fr</p>
                  </span>
                </li>
              </ul>
            </Col>
            <Col md="4 my-2">
              <h4 className="title font-weight-bold h4-responsive"> </h4>
              <span className="d-flex flex-row justify-content-around">
                <a href="https://www.facebook.com" target="_blank"
                  rel="noopener noreferrer">
                  <img alt="facebook" src={require('./img/facebook.svg')} className="img-fluid social"/>
                </a>
                <a href="https://www.twitter.com" target="_blank"
                  rel="noopener noreferrer">
                  <img alt="facebook" src={require('./img/twitter.svg')} className="img-fluid social"/>
                </a>
                <a href="https://www.youtube.com"
                  target="_blank" rel="noopener noreferrer">
                  <img alt="facebook" src={require('./img/youtube.svg')} className="img-fluid social"/>
                </a>
              </span>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center black-text font-weight-bold py-3" id="myfooter2">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright : {" "}
            <a href="https://mairieaboisso.herokuapp.com/" className="black-text font-weight-bold"> Mairie Aboisso </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
