import React, { useState } from "react";
import { Container } from "mdbreact";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import {
  servicesmunicipaux,
  servicesmunicipauxinfos
} from "../containers/servicesmunicipaux";

export default function ServicesMuncipaux() {
  const [activetab, useActiveTab] = useState("");

  function toggle(tab) {
    if (activetab !== tab) useActiveTab(tab);
  }

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Les Services Municipaux
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {servicesmunicipauxinfos.map((i, key) => (
              <p key={key} className="text-justify descriptn">
                {" "}
                {i.textinfo}{" "}
              </p>
            ))}
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm="12">
            <Nav tabs>
              {servicesmunicipaux.map((i, key) => (
                <NavItem key={key}>
                  <NavLink
                    className={classnames({
                      active: activetab === i.id
                    })}
                    onClick={() => toggle(i.id)}
                  >
                    <p className="mytitle font-weight-bold">{i.title}</p>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            <TabContent activeTab={activetab}>
              {servicesmunicipaux.map((i, key) => (
                <TabPane tabId={i.id} key={key}>
                  <Row>
                    <Col sm="12">
                      <p className="text-justify descriptn my-5">{i.info}</p>
                    </Col>
                  </Row>
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
