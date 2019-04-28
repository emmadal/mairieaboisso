import React from "react"
import { Container, Row, Col } from "mdbreact"
import { conseilmunicipal, attributions } from '../containers/conseilmunicipal'

export default function ConseilMunicipal() {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Le Conseil Municipal
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {
              conseilmunicipal.map((i, key) =>(
                <p className="text-justify descriptn" key={key}> {i.info} </p>
              ))
            }
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h5 className="h5-responsive text-center mytitle mt-4"> Les attributions du Conseil Municipal</h5>
            {
              attributions.map((i, key) =>(
                <p className="mt-4 text-justify descriptn"key={key}> {i.info} </p>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}
