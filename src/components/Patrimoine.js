import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {description} from './containers/Description'

export default class Patrimoine extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: ''
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
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
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>
                    <p className="mytitle font-weight-bold">MILIEU NATUREL</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>
                    <p className="mytitle font-weight-bold">MILIEU HUMAIN</p>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab}>

                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <h5 className="h5-responsive mytitle mt-4">Relief</h5>
                      <p className="text-justify descriptn">
                        {
                        description[3].textrelief
                        }
                      </p>
                      <h5 className="h5-responsive mytitle">Hydrographie</h5>
                      <p className="text-justify descriptn">
                        {
                        description[4].textclimat
                        }
                      </p>
                      <ul>
                        <li className="descriptn">une saison sèche de Décembre à Février</li>
                        <li className="descriptn">
                          une grande saison pluvieuse de Mars à Juillet
                        </li>
                        <li className="descriptn">une petite saison sèche d'Août à Septembre</li>
                        <li className="descriptn">
                          une petite saison pluvieuse d'Octobre à Novembre
                        </li>
                      </ul>
                      <h5 className="h5-responsive mytitle">Vegetation</h5>
                      <p className="text-justify descriptn">
                        {
                        description[5].textvegetation
                        }
                      </p>
                      <ul>
                        <li className="descriptn">la forêt classée de Soumié de 725 ha</li>
                        <li className="descriptn">la forêt classée de Nègué de 350 ha</li>
                      </ul>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <h5 className="h5-responsive mytitle mt-4">Population</h5>
                      <p className="text-justify descriptn">
                        {
                        description[6].textpopulation
                        }
                      </p>
                      <h5 className="h5-responsive mytitle">Activités économiques</h5>
                      <p className="text-justify descriptn">
                        {
                        description[7].texteco
                        }
                      </p>
                      <h5 className="h5-responsive mytitle">Les cultures de rentes</h5>
                      <p className="text-justify descriptn">
                        {
                        description[8].textrentes
                        }
                      </p>
                      <h5 className="h5-responsive mytitle">Les cultures vivrières</h5>
                      <p className="text-justify descriptn">
                        {
                        description[9].textvivriers
                        }
                      </p>
                      <h5 className="h5-responsive mytitle">Autres activités</h5>
                      <p className="text-justify descriptn">
                        {
                        description[10].textautres
                        }
                      </p>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
