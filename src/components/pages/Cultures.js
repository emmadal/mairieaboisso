import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader
} from "mdbreact"
import { culturels } from "../containers/culturels"
export default function Cultures() {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          Activites cuturelles
        </h3>
      </Container>
      <Container>
        <Row>
          {culturels.map((data, key) => (
            <Col sm="4" key={key}>
              <Card style={{ width: "22rem", marginTop: "1rem" }}>
                <CardHeader
                  color="success-color"
                  tag="h3"
                  className="font-weight-bold"
                >
                  {data.title}
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <img
                      src={data.image}
                      className="img-fluid text-center"
                      alt={data.title}
                    />
                  </CardTitle>
                  <CardText className="text-justify">{data.text}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
