import React from "react"
import { Container, Row, Col } from "mdbreact"
import { maire } from '../containers/maire'

export default function Maire() {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Le Maire
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {maire.map((i, key) => (
              <p className="text-justify descriptn" key={key}>
                {i.text}
              </p>
            ))}
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <details>
              <summary className="h5-responsive mytitle mt-4">Biographie du Maire</summary>
              <img src={require('../img/ngouan.jpg')} className="rounded mt-5 img-fluid" alt="maire"/>
            </details>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
