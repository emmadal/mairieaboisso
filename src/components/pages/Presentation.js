import React, { useState } from "react"
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardImg, 
  CardBody,
  CardText,
  CardTitle
} from "reactstrap"
import { Collapse } from "mdbreact"
import {
  mairie,
  cabinet,
  cabinetservices,
  secretariat,
  secretariatservices,
  direction,
  directionservices
} from "../containers/mairie"
import { maire } from "../containers/presentationmaire"
import { photomunicipalite, photomaire } from "../containers/photomunicipalite"
import {
  conseilmunicipal,
  attributions,
  /*     competences,
    detailscompetences, */
  municipalite,
  membresmunicipalite
} from "../containers/conseilmunicipal"

import classnames from "classnames"
import "../styles/presentation.css"

const Presentation = () => {
  const [activeTab, setActiveTab] = useState("1")
  const [collapseattr, setCollapseAttr] = useState(false)
  // const [collapsecomp, setCollapseComp] = useState(false)

  function toggle(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  function setMyCollapseAttr() {
    setCollapseAttr(!collapseattr)
  }
  /*   function setMyCollapseComp() {
    setCollapseComp(!collapsecomp)
  }
 */

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          Presentation de la Mairie
        </h3>
        <Row>
          <Col sm="12">
            {mairie.map((text, key) => (
              <p className="text-justify descriptn" key={key}>
                {text.info}
              </p>
            ))}
          </Col>
        </Row>

        {/*Debut des Tabs*/}
        <Row className="mt-3">
          <Col sm="12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1")
                  }}
                >
                  <p className="mytitle font-weight-bold">LE MAIRE</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2")
                  }}
                >
                  <p className="mytitle font-weight-bold">BIOGRAPHIE</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3")
                  }}
                >
                  <p className="mytitle font-weight-bold">
                    LE CABINET DU MAIRE
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4")
                  }}
                >
                  <p className="mytitle font-weight-bold">
                    LES SERVICES DE LA MARIE
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "5" })}
                  onClick={() => {
                    toggle("5")
                  }}
                >
                  <p className="mytitle font-weight-bold">
                    LE CONSEIL MUNICIPAL
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "6" })}
                  onClick={() => {
                    toggle("6")
                  }}
                >
                  <p className="mytitle font-weight-bold">LA MUNICIPALITE</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          {/*Contenu des Tabs*/}

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {maire.map((text, key) => (
                <p key={key} className="text-justify descriptn mt-3 mx-1 px-3">
                  {text.info}
                </p>
              ))}
            </TabPane>
            <TabPane tabId="2" />

            <TabPane tabId="3">
              {cabinet.map((text, key) => (
                <p key={key} className="text-justify descriptn mt-3 p-3">
                  {text.info}
                </p>
              ))}
              {cabinetservices.map((text, key) => (
                <ul key={key}>
                  <li className="text-justify descriptn px-2">{text.info}</li>
                </ul>
              ))}
            </TabPane>

            <TabPane tabId="4">
              {secretariat.map((text, key) => (
                <p key={key} className="text-justify descriptn mt-3 p-3">
                  {text.info}
                </p>
              ))}
              {secretariatservices.map((text, key) => (
                <ul key={key}>
                  <li className="text-justify descriptn px-2">{text.info}</li>
                </ul>
              ))}
              {direction.map((text, key) => (
                <p key={key} className="text-justify descriptn mt-3 p-3">
                  {text.info}
                </p>
              ))}
              {directionservices.map((text, key) => (
                <ul key={key}>
                  <li className="text-justify descriptn px-2">{text.info}</li>
                </ul>
              ))}
            </TabPane>

            <TabPane tabId="5">
              {conseilmunicipal.map((text, key) => (
                <p key={key} className="text-justify descriptn mt-3 p-3">
                  {text.info}
                </p>
              ))}
              <Row className=" p-3">
                {/* <Col sm="6">
                      <NavLink>
                        <h5 className="text-justify text-center h5-responsive mytitle"
                          onClick={setMyCollapseComp}>
                          Les compétences du Conseil Municipal
                        </h5>
                      </NavLink>
                      <Collapse isOpen={collapsecomp}>
                        {
                          competences.map((text, key) =>(
                            <p key={key} className="text-justify descriptn mt-3 p-3">{text.info}</p>
                          ))
                        }
                        {
                          detailscompetences.map((text, key) => (
                            <ul key={key} >
                              <li className="text-justify descriptn px-2">{text.info}</li>
                            </ul>
                          ))
                        }
                      </Collapse>
                    </Col> */}
                <Col sm="12">
                  <NavLink>
                    <h5
                      className="text-justify h5-responsive text-center mytitle"
                      onClick={setMyCollapseAttr}
                    >
                      Les attributions du Conseil Municipal
                    </h5>
                  </NavLink>
                  <Collapse isOpen={collapseattr}>
                    {attributions.map((text, key) => (
                      <p key={key} className="text-justify descriptn mt-3 p-3">
                        {text.info}
                      </p>
                    ))}
                  </Collapse>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="6">
              {municipalite.map((text, key) => (
                <p key={key} className="text-justify descriptn mt-3 mx-1 px-3">
                  {text.info}
                </p>
              ))}
              <p className="text-justify descriptn mt-3 mx-1 px-3">
                Les membres de la Municipalité :
              </p>
              <Col sm="12" className="text-center rowmaire">
                <Card>
                  <CardImg top width="100%" classname="img-responsive" src={photomaire[0].img}/>
                  <CardBody>
                    <CardTitle className="text-center text-justify font-weight-bold descriptn">{photomaire[0].name}</CardTitle>
                    <CardText className="text-center font-weight-bold descriptn">{photomaire[0].fonction}</CardText>
                  </CardBody>
                </Card>  
              </Col>
              <Container className="mt-4">
                <Row className="rowadjoint">
                  {
                    photomunicipalite.map((i, w) =>(
                      <Card key={w} className="my-3">
                        <CardImg top width="100%" src={i.img} className="img-fluid" />
                        <CardBody>
                          <CardTitle className="text-center text-justify font-weight-bold descriptn"> {i.name} </CardTitle>
                          <CardText className="text-center text-justify font-weight-bold descriptn"> { i.fonction} </CardText>
                        </CardBody>
                      </Card>
                    ))
                  }
                </Row>
              </Container>
            </TabPane>
          </TabContent>

          {/*Contenu des Tabs*/}
        </Row>
        {/*Debut des Tabs*/}
      </Container>
    </div>
  )
}

export default Presentation
