import React from 'react'
import {Container, Row, Col} from 'mdbreact'
import {adresses, hopitaux, urgences} from '../containers/Adresses'

export default function AdressesUtiles() {
  return(
    <div>
    <div>
      <Container>
        <h1 className="mt-5 mb-5 text-green h1-responsive mytitle"> Les adresses utiles</h1>
        <Row>
          <Col sm="12 mt-3">
            <h3 className="h3-responsive mytitle font-weight-bold text-center mb-3">
              Pharmacies
            </h3>
            {
              adresses.map((text, key) => (
                <span key={key}>
                  <p className="descriptn mt-2">{text.name} : (+225){text.contact}, {text.dr}</p>
                </span>
              ))
            }
          </Col>
        </Row>
        <Row>
          <Col sm="12 mt-4">
            <h3 className="h3-responsive mytitle font-weight-bold text-center mb-3">
              Numeros d'urgences
            </h3>
            {
              urgences.map((text, key) => (
                <span key={key}>
                  <p className="descriptn mt-2">{text.name} : {text.contact} </p>
                </span>
              ))
            }

          </Col>
        </Row>
        <Row>
          <Col sm="12 mt-4">
            <h3 className="h3-responsive mytitle font-weight-bold text-center mb-3">
              Etablisements sanitaires
            </h3>
            {
              hopitaux.map((text, key) => (
                <span key={key}>
                  <p className="descriptn mt-2">{text.name} : (+225){text.contact}, {text.dr}</p>
                </span>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}
