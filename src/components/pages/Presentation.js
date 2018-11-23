import React, {useState}from 'react'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {mairie, cabinet, cabinetservices, secretariat, secretariatservices, direction, directionservices, conseillers} from '../containers/mairie'
import classnames from 'classnames';
import '../styles/presentation.css'

const Presentation = () => {

  const [activeTab, setActiveTab] = useState('1')

  function toggle(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }


  return(
    <div>
      <Container>
        <h1 className="mt-5 mb-5 text-green h1-responsive mytitle">Presentation de la Mairie</h1>
        <Row>
        	<Col sm="12">
        		{
        			mairie.map((text, key) =>(
        			<p className="text-justify descriptn" key={key}>{text.info}</p>
        			))
        		}
        	</Col>
        </Row>

        {/*Debut des Tabs*/}
          <Row className="mt-3">
            <Col sm="12">
              <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { toggle('1'); }}>
                      <p className="mytitle font-weight-bold">LE MAIRE</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggle('2'); }}>
                      <p className="mytitle font-weight-bold">LE CABINET DU MAIRE</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { toggle('3'); }}>
                      <p className="mytitle font-weight-bold">LE SECRETARIAT</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '4' })}
                      onClick={() => { toggle('4'); }}>
                      <p className="mytitle font-weight-bold">LE CONSEIL MUNICIPAL</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '5' })}
                      onClick={() => { toggle('5'); }}>
                      <p className="mytitle font-weight-bold">L' ORGANIGRAMME</p>
                    </NavLink>
                  </NavItem>
              </Nav>
            </Col>

            {/*Contenu des Tabs*/}

              <TabContent activeTab={activeTab}>

                <TabPane tabId="1"></TabPane>

                <TabPane tabId="2">
                  {
                    cabinet.map((text, key) => (
                      <p key={key} className="text-justify descriptn mt-3 p-3">{text.info}</p>
                    ))
                  }
                  {
                    cabinetservices.map((text, key) => (
                      <ul key={key} >
                        <li className="text-justify descriptn px-2">{text.info}</li>
                      </ul>
                    ))
                  }
                </TabPane>

                <TabPane tabId="3">
                  {
                    secretariat.map((text, key) => (
                      <p key={key} className="text-justify descriptn mt-3 p-3">{text.info}</p>
                    ))
                  }
                  {
                    secretariatservices.map((text, key) => (
                      <ul key={key}>
                        <li className="text-justify descriptn px-2">{text.info}</li>
                      </ul>
                    ))
                  }
                  {
                    direction.map((text, key) => (
                      <p key={key} className="text-justify descriptn mt-3 p-3">{text.info}</p>
                    ))
                  }
                  {
                    directionservices.map((text, key) => (
                      <ul key={key}>
                        <li className="text-justify descriptn px-2">{text.info}</li>
                      </ul>
                    ))
                  }
                </TabPane>

                <TabPane tabId="4">
                  <p className="text-justify descriptn mt-3 px-2">
                    Elu aux elections municipales organisees le 13 octobre
                    2018 ,le conseil municipal est composé de :
                  </p>
                  <p className="text-justify descriptn px-2">
                    N'Gouan Jeremie Alfred <i className="font-weight-bold">(Le maire)</i>
                  </p>
                  {
                    conseillers.map((text, key) => (
                      <ul key={key}>
                        <li className="text-justify descriptn px-2 mt-3">{text.name}</li>
                      </ul>
                    ))
                  }
                </TabPane>

              </TabContent>

            {/*Contenu des Tabs*/}

          </Row>
        {/*Debut des Tabs*/}
      </Container>
    </div>
  )
}

export default Presentation;
