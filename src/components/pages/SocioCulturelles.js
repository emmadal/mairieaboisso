import React, {useState} from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import {
  socioculturels,
  conditions,
  actionsociales, 
  details,
  pieces
} from "../containers/socioculturels";
import classnames from "classnames";

export default function SocioCulturelles() {
  const [activetab, useActiveTab] = useState("");

  function toggle(tab) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (activetab !== tab) useActiveTab(tab);
  }

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Les Services socio culturels
        </h3>
      </Container>
      <Container>
        <Row>
          <Col sm="12">
            {socioculturels.map((i, key) => (
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

        <Row>
          <Col sm="12">
            <h5 className="text-green h5-responsive mytitle text-center my-5">
              {" "}
              Actions sociales
            </h5>
            <Nav tabs>
              {actionsociales.map((i, key) => (
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
              {actionsociales.map((i, key) =>
                i.id === 1 ? (
                  <TabPane tabId={i.id} key={key}>
                    <Row>
                      <Col sm="12">
                        <p className="text-justify descriptn my-5">
                          {i.info}
                        </p>
                        <p className="text-justify descriptn mytitle font-weight-bold">
                          Critères de sélection
                        </p>
                        {
                          details.map((text, key) =>(
                            <p className="text-justify descriptn" key={key}>{text.info}</p>
                          ))
                        }
                        <p className="text-justify descriptn mytitle font-weight-bold mt-5">
                          Pièces a fournir
                        </p>
                        {pieces.map((text, key) => (
                          <p className="text-justify descriptn" key={key}>{text.info} </p>
                        ))}
                      </Col>
                    </Row>
                  </TabPane>
                ) : (
                  <TabPane tabId={i.id} key={key}>
                    <Row>
                      <Col sm="12">
                        <p className="text-justify descriptn my-5">
                          {i.info}
                        </p>
                      </Col>
                    </Row>
                  </TabPane>
                )
              )}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
