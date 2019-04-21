import React from "react"
import { description } from "../containers/Description"
import "../styles/historiqueville.css"
import { Container, Row, Col } from "mdbreact"
import { economies, securites, educations } from "../containers/culturels"
import Patrimoine from "../Patrimoine"

export default function DecouvrirVille() {
  return (
    <div>
      <div className="container">
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Decouvrir Aboisso{" "}
        </h3>
        <div className="row">
          <div className="col-md-12">
            <img
              src={require("../img/ville_aboisso_large.png")}
              className="img-fluid rounded"
              alt="Histoire"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-justify descriptn">{description[2].text}</p>
            <Patrimoine />
          </div>
        </div>
      </div>

      <Container>
        <h4 className="mt-5 mb-3 text-green h4-responsive mytitle">
          {" "}
          Activités économiques
        </h4>
        <Row>
          {economies.map(doc => (
            <Col sm="12">
              <h5 className="mytitle h5-responsive">{doc.title}</h5>
              <p className="text-justify descriptn">{doc.text}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h4 className="mt-3 mb-3 text-green h4-responsive mytitle">
          {" "}
          Securite et systeme educatif
        </h4>
        <Row>
          {securites.map(doc => (
            <Col sm="12">
              <h5 className="mytitle h5-responsive">Plan securitaire</h5>
              <p className="text-justify descriptn">{doc.text}</p>
            </Col>
          ))}
        </Row>
        <Row>
          <h5 className="mytitle h5-responsive mx-3">Plan educatif</h5>
          {educations.map(doc => (
            <Col sm="12">
              <p className="text-justify descriptn">{doc.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
