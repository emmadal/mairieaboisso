import React from "react";
import { Container, Col, Row } from "mdbreact";
import { policemunicipale } from "../containers/policemunicipale";

export default function PoliceMunicipale() {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          La Police Municipale
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {policemunicipale.map((i, key) => (
              <p key={key} className="descriptn text-justify">
                {" "}
                {i.info}{" "}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
