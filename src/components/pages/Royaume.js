import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {royaume} from '../containers/royaume'
import {Rois} from '../Rois'

export default class Royaume extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
          <h1 className="mt-5 mb-5 h1-responsive mytitle"> Royaume du SANWI </h1>
          <div className="row">
            <div className="col-md-12">
              <p className="text-justify descriptn">{royaume[0].textintro}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>
                    <p className="mytitle font-weight-bold">La chefferie</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>
                    <p className="mytitle font-weight-bold">La dot</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}>
                    <p className="mytitle font-weight-bold">Le mariage</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}>
                    <p className="mytitle font-weight-bold">Le divorce</p>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <img src={require('../img/chefferie.png')} alt="mariage" className="img-fluid mt-3" />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <p className=" text-justify descriptn mt-2">{royaume[1].textchefferie}</p>
                      <p className=" text-justify descriptn mt-2">Il y a deux (2) systèmes de pouvoir :</p>
                      <ul>
                        <li className=" text-justify descriptn">La succession par le lignage du fondateur du village.
                        </li>
                        <li className=" text-justify descriptn">La succession par désignation du conseil des sages des grandes familles du village, selon les critères prédéfinis (sagesse, intelligence, disponibilité, capacité à diriger les hommes).
                        </li>
                      </ul>
                      <p className=" text-justify descriptn mt-2">{royaume[2].textchefsuite}</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="8">
                      <p className=" text-justify descriptn mt-3">{royaume[3].textdot}</p>
                    </Col>
                    <Col sm="4 text-center">
                      <img src={require('../img/dot.png')} alt="mariage" className="img-fluid mt-5 text-center" />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                  <Col sm="8 text-left">
                    <p className=" text-justify float-left descriptn mt-5">{royaume[4].textmariage}</p>
                  </Col>
                    <Col sm="4">
                      <img src={require('../img/mariage.png')} alt="mariage" className="img-fluid mt-3" />
                    </Col>

                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <p className=" text-justify descriptn mt-2">{royaume[5].textdivorce}</p>
                      <h5 className=" text-justify descriptn mytitle mt-2">Le veuvage</h5>
                      <p className=" text-justify descriptn mt-2">{royaume[6].textveuve}</p>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
          <h4 className="h4-responsive mytitle mt-3">Quelques ROIS du SANWI</h4>
          <div className="row">
            <div className="col-md text-center">
            </div>
            <div className="col-md mt-3">
              <Rois />
            </div>
            <div className="col-md text-center">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
