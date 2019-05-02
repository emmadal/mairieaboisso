import React from "react";
import TextScroll from "react-textscroll";
import { text } from "./containers/flashinfos";
import { Container, Row, Col } from "mdbreact";
import "./styles/flash.css";

export default function FlashInfos() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col sm="2">
            <div className="word-div">
              <p className="text-center mt-2 white-text animated tada slower infinite font-weight-bold">
                Flash infos
              </p>
            </div>
          </Col>
          <Col sm="10">
            <TextScroll mode="horizontal" text={text} speed={6000} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
