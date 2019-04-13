import React from 'react'
import {Container, Col, Row} from 'mdbreact'
import {intro, pieces} from '../containers/administratives'
import '../styles/demarches.css'
export default function PriseCharge() {
  return(
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          Prise en charge scolaire
        </h3>
      </Container>

      <Container>
        <Row>
          <Col sm="5">
            {
              intro.map((text, key) =>(
                <p className="text-justify descriptn" key={key}>{text.info}</p>
              ))
            }
            <p className="text-justify descriptn mytitle font-weight-bold">
              Pieces a fournir
            </p>
            {
              pieces.map((text, key) =>(
                <p className="text-justify descriptn" key={key}>{text.info}</p>
              ))
            }
          </Col>

          <Col sm="7" className="colimg mt-5">
            <img src={require('../img/enfant1.png')} alt="enfant1" className="img-fluid rounded m-2"/>
            <img src={require('../img/enfant2.png')} alt="enfant2" className="img-fluid rounded m-2"/>
            <img src={require('../img/enfant3.png')} alt="enfant3" className="img-fluid rounded m-2"/>
            <img src={require('../img/enfant4.png')} alt="enfant4" className="img-fluid rounded m-2"/>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
