import React from "react"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { description } from "./containers/Description"

export default class Patrimoine extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: ""
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1")
                    }}
                  >
                    <p className="mytitle font-weight-bold">
                      Donnees physiques
                    </p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2")
                    }}
                  >
                    <p className="mytitle font-weight-bold">
                      Donnees humaines
                    </p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggle("3")
                    }}
                  >
                    <p className="mytitle font-weight-bold">
                      Donnees economiques
                    </p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "4"
                    })}
                    onClick={() => {
                      this.toggle("4")
                    }}
                  >
                    <p className="mytitle font-weight-bold">
                      Infrastructures
                    </p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "5"
                    })}
                    onClick={() => {
                      this.toggle("5")
                    }}
                  >
                    <p className="mytitle font-weight-bold">
                      Atouts culturels & touristiques
                    </p>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <h5 className="h5-responsive mytitle mt-5">Relief</h5>
                      <p className="text-justify descriptn">
                        {description[3].textrelief}
                      </p>
                      <h5 className="h5-responsive mytitle">
                        Hydrographie
                      </h5>
                      <p className="text-justify descriptn">
                        {description[4].textclimat}
                      </p>
                      <ul>
                        <li className="descriptn">
                          une saison sèche de Décembre à Février
                        </li>
                        <li className="descriptn">
                          une grande saison pluvieuse de Mars à Juillet
                        </li>
                        <li className="descriptn">
                          une petite saison sèche d'Août à Septembre
                        </li>
                        <li className="descriptn">
                          une petite saison pluvieuse d'Octobre à Novembre
                        </li>
                      </ul>
                      <h5 className="h5-responsive mytitle">Vegetation</h5>
                      <p className="text-justify descriptn">
                        {description[5].textvegetation}
                      </p>
                      <ul>
                        <li className="descriptn">
                          la forêt classée de Soumié de 725 ha
                        </li>
                        <li className="descriptn">
                          la forêt classée de Nègué de 350 ha
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <p className="text-justify descriptn mt-5">
                        {description[6].textpopulation}
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <p className="text-justify descriptn mt-5">
                        {description[7].texteco}
                      </p>
                      <h5 className="h5-responsive mytitle">Agriculture</h5>
                      <p className="text-justify descriptn">
                        {description[8].textagricultures}
                      </p>
                      <h5 className="h5-responsive mytitle">Commerce</h5>
                      <p className="text-justify descriptn">
                        {description[9].textcommerce}
                      </p>
                      <h5 className="h5-responsive mytitle">Transport</h5>
                      <p className="text-justify descriptn">
                        {description[10].texttransport}
                      </p>
                      <h5 className="h5-responsive mytitle">Banques</h5>
                      <p className="text-justify descriptn">
                        {description[11].textbanque}
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <h5 className="h5-responsive mytitle mt-5">Sante</h5>
                      <p className="text-justify descriptn">
                        {description[12].textsante}
                      </p>
                      <h5 className="h5-responsive mytitle">Securite</h5>
                      <p className="text-justify descriptn">
                        {description[13].textsecurite}
                      </p>
                      <h5 className="h5-responsive mytitle">Education</h5>
                      <p className="text-justify descriptn">
                        {description[14].texteducation}
                      </p>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <h5 className="h5-responsive mytitle mt-5">Le Royaume Sanwi</h5>
                      <p className="text-justify descriptn">
                        {description[15].textroy}
                      </p>
                      <h5 className="h5-responsive mytitle">Le Fleuve BIA</h5>
                      <p className="text-justify descriptn">
                        {description[16].textbia}
                      </p>
                      <h5 className="h5-responsive mytitle">Hoteleries & Restauration </h5>
                      <p className="text-justify descriptn">
                        {description[17].texthotels}
                      </p>
                      <details>
                        <summary className="h5-responsive mytitle">Les Evenements culturels & Sportifs :</summary>
                        <ul>
                          <li className="text-justify descriptn black-text mt-4">
                            {description[18].textfestivals}
                          </li>
                          <li className="text-justify descriptn black-text mt-4">
                            {description[19].textignames}
                          </li>
                          <li className="text-justify descriptn black-text mt-4">
                            {description[20].textsamandje}
                          </li>
                          <li className="text-justify descriptn black-text mt-4">
                            {description[21].textsports}
                          </li>
                        </ul>
                      </details>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
