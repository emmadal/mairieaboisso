import React from "react";
import { municipalite, membres } from "../containers/municipalite";
import {
  Container,
  Row,
  Col,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdbreact";

export default function Municipalite() {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          La Municipalité
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {municipalite.map((i, key) => (
              <p className="text-justify descriptn" key={key}>
                {i.text}
              </p>
            ))}
          </Col>
          <h5 className="h5-responsive mt-3 text-center mytitle">
            Les membres de la Municipalité
          </h5>
          <Col sm="12">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center"
              }}
            >
              <MDBCard style={{ width: "22rem" }} className="text-center mt-3">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../img/maire.jpg")}
                  waves
                  top
                />
                <MDBCardBody>
                  <MDBCardTitle>N'GOUAN JEREMIE ALFRED</MDBCardTitle>
                  <MDBCardText className="text-center">LE MAIRE</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between"
              }}
            >
              {membres.map((i, key) => (
                <MDBCard
                  style={{ width: "22rem" }}
                  key={key}
                  className="text-center mt-3"
                >
                  <MDBCardImage className="img-fluid" src={i.img} waves top />
                  <MDBCardBody>
                    <MDBCardTitle>{i.nom}</MDBCardTitle>
                    <MDBCardText className="text-center">
                      {i.attribution}
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className="text-center"> {i.role} </MDBCardFooter>
                </MDBCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
