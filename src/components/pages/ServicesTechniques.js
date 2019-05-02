import React from "react";
import { Container, Row, Col } from "mdbreact";
import { techniques, conditions } from "../containers/servicestechniques";
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
            {techniques.map((i, key) => (
              <section key={key}>
                <h5 className="text-green h5-responsive mytitle text-center my-3">
                  {" "}
                  {i.title}{" "}
                </h5>
                <p className="descriptn text-justify"> {i.info} </p>
              </section>
            ))}
            {conditions.map((i, key) => (
              <ul key={key}>
                <li className="descriptn text-justify"> {i.info} </li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
