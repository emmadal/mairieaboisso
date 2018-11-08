import React from 'react'
import {description} from '../containers/Description'
import '../styles/historiqueville.css'
import {Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader}
 from 'mdbreact'
 import {culturels} from '../containers/culturels'

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
            <h4 className="h4-responsive mytitle mt-5">MILIEU NATUREL</h4>
            <h5 className="h5-responsive mytitle">Relief</h5>
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
              <li className="descriptn">une grande saison pluvieuse de Mars à Juillet</li>
              <li className="descriptn">une petite saison sèche d'Août à Septembre</li>
              <li className="descriptn">une petite saison pluvieuse d'Octobre à Novembre</li>
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
            <h4 className="h4-responsive mytitle mt-5">MILIEU HUMAIN</h4>
            <h5 className="h5-responsive mytitle">Population</h5>
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
