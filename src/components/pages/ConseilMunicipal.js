import React from "react";
import { Container, Row, Col } from "mdbreact";
import { Table } from "reactstrap";
import {
  conseilmunicipal,
  attributions,
  conseillers
} from "../containers/conseilmunicipal";

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
            {conseilmunicipal.map((i, key) => (
              <p className="text-justify descriptn" key={key}>
                {" "}
                {i.info}{" "}
              </p>
            ))}
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h5 className="h5-responsive text-center mytitle mt-4">
              {" "}
              Les attributions du Conseil Municipal
            </h5>
            {attributions.map((i, key) => (
              <p className="mt-4 text-justify descriptn" key={key}>
                {" "}
                {i.info}{" "}
              </p>
            ))}
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <details>
              <summary className="h5-responsive text-center mytitle my-3">
                Listes des conseillers Municipaux
              </summary>
              <Table bordered hover responsive className="my-3">
                <thead>
                  <tr>
                    <th className="text-center font-weight-bold">#</th>
                    <th className="text-center font-weight-bold">Nom et Prenoms</th>
                  </tr>
                </thead>
                {conseillers.map((i, key) => (
                  <tbody key={key}>
                    <tr>
                      <th scope="row" className="text-center"> {i.id} </th>
                      <th className="text-center"> {i.name} </th>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </details>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
