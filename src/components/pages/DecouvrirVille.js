import React from 'react'
import {description} from '../containers/Description'
import '../styles/historiqueville.css'
import {Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader}
 from 'mdbreact'
 import {culturels} from '../containers/culturels'
 import Patrimoine from '../Patrimoine'

export default function DecouvrirVille() {
  return(
    <div>
      <div className="container">
        <h1 className="mt-5 mb-5 text-green h1-responsive mytitle"> Decouvrir Aboisso </h1>
        <div className="row">
          <div className="col-md-12">
            <img src={require('../img/ville_aboisso_large.png')} className="img-fluid rounded" alt="Histoire"/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-justify descriptn">
              {
                description[2].text
              }
            </p>
            <Patrimoine />
          </div>
        </div>
      </div>
      <Container>
        <h1 className="mt-5 mb-5 text-green h1-responsive mytitle"> Activites Culturelles</h1>
        <Row>
          {
            culturels.map((data, key) =>(
              <Col sm="4" key={key}>
                <Card style={{width: '22rem', marginTop: '1rem'}}  >
                  <CardHeader color="success-color" tag="h3"
                    className="font-weight-bold">{data.title}
                  </CardHeader>
                    <CardBody>
                      <CardTitle>
                        <img src={data.image} className="img-fluid text-center" alt={data.title}/>
                      </CardTitle>
                      <CardText className="text-justify">
                        {data.text}
                      </CardText>
                    </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}
