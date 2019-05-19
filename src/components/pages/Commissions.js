import React from "react";
import { Container, Col, Row } from "mdbreact";
import {
  commissions,
  comEco,
  comaffaires,
  comsante,
  comfoncier
} from "../containers/commissions";
import { Table } from "reactstrap";

export default function Commissions() {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Les Commissions
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {commissions.map((i, key) => (
              <p key={key} className="text-justify descriptn">
                {i.info}
              </p>
            ))}
          </Col>
        </Row>
        <Row>
          <Col sm="3">
            <details>
              <summary className="h6-responsive text-center mytitle my-3">
                Commission des Affaires Economiques, Financières et Domaniales
              </summary>
              <Table bordered hover responsive className="my-3">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Nom et Prénoms</th>
                  </tr>
                </thead>
                {comEco.map((i, key) => (
                  <tbody key={key}>
                    <tr>
                      <th scope="row"> {i.id} </th>
                      <th> {i.name} </th>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </details>
          </Col>

          <Col sm="3">
            <details>
              <summary className="h6-responsive text-center mytitle my-3">
                Commission des Affaires Sociales, Culturelles et de Promotion Humaine
              </summary>
              <Table bordered hover responsive className="my-3">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Nom et Prénoms</th>
                  </tr>
                </thead>
                {comaffaires.map((i, key) => (
                  <tbody key={key}>
                    <tr>
                      <th scope="row"> {i.id} </th>
                      <th> {i.name} </th>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </details>
          </Col>

          <Col sm="3">
            <details>
              <summary className="h6-responsive text-center mytitle my-3">
                Commission Santé et Cadre de Vie
              </summary>
              <Table bordered hover responsive className="my-3">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Nom et Prénoms</th>
                  </tr>
                </thead>
                {comsante.map((i, key) => (
                  <tbody key={key}>
                    <tr>
                      <th scope="row"> {i.id} </th>
                      <th> {i.name} </th>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </details>
          </Col>

          <Col sm="3">
            <details>
              <summary className="h6-responsive text-center mytitle my-3">
                Commission du Foncier
              </summary>
              <Table bordered hover responsive className="my-3">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Nom et Prénoms</th>
                  </tr>
                </thead>
                {comfoncier.map((i, key) => (
                  <tbody key={key}>
                    <tr>
                      <th scope="row"> {i.id} </th>
                      <th> {i.name} </th>
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
