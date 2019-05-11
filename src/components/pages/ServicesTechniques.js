import React from "react";
import { Container, Row, Col } from "mdbreact";
import {servicestech , serviestechrole, servicestechrole } from '../containers/servicestechniques'

export default function PoliceMunicipale() {
  return (
    <div>
      <Container>
        <h3 className="my-5 text-green h3-responsive mytitle">
          {" "}
          Les Services Techniques
        </h3>
      </Container>

      <Container>
        <Row>
          <Col sm="12">
            <p className="text-justify descriptn"> {servicestech[0].textinfo} </p>
            {
              servicestechrole.map((i, key) =>(
                <ul key={key}>
                  <li className="text-justify descriptn">{i.textinfo}</li>
                </ul>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
