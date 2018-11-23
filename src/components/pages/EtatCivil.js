import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {civil} from '../containers/civil'

export default function EtatCivil() {
  return(
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle"> Etat civil</h3>
        <Row>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander une attestation de concubinage
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">S’adresser à :</h6>
              <i className="descriptn">Mairie du domicile</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[0].concubinage
              }
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Obtenir une attestation de domicile
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">S’adresser à :</h6>
              <i className="descriptn">Mairie du domicile</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[2].domicile
              }
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Obtenir une carte d’électeur
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">S’adresser à :</h6>
              <i className="descriptn">Mairie du domicile</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[3].electeur
              }
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander un livret de famille
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">S’adresser à :</h6>
              <i className="descriptn">la Mairie du lieu de mariage remis le jour de la
                célébration.
              </i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[4].livretfamille
              }
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Declarer une naissance
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">S’adresser à :</h6>
              <i className="descriptn">Mairie du lieu de naissance</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[5].naissance
              }
            </p>
            <h6 className="font-weight-bold h6-responsive mt-2">Délai :</h6>
            <p className="descriptn">Trois (03) mois à compter du jour de la naissance.</p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Participer au recensement militaire
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Toute Mairie</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[6].militaire
              }
            </p>
            <h6 className="font-weight-bold h6-responsive mt-2">Personnes concernées :</h6>
            <p className="descriptn">Hommes et femmes de nationalité ivoirienne âgés de 18 ans au
              moins.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander une certification
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Toute Mairie</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[7].certification
              }
            </p>
            <h6 className="font-weight-bold h6-responsive mt-2">NB :</h6>
            <p className="descriptn">les agents publics ne peuvent traiter des documents en
              langue étrangère non traduits en français.
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander une légalisation
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Toute Mairie</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[8].legalisation
              }
            </p>
            <h6 className="font-weight-bold h6-responsive mt-2">NB :</h6>
            <p className="descriptn">les agents publics ne peuvent traiter des documents en
              langue étrangère non traduits en français.
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Inscrire les enfants dans le livret de famille
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Mairie du lieu de naissance de l’enfant</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[9].enfantlivret
              }
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander un duplicata du livret de famille
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Mairie du lieu de mariage</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[10].duplicatalivret
              }
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander un acte de naissance, mariage…
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Mairie du lieu de naissance, mariage ou décès</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[11].acte
              }
            </p>
          </Col>
          <Col sm="4">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Demander le mariage civil
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn">Mairie du lieu de résidence de l’un des futurs époux ou
                tout autre lieu sur réquisition du Procureur de la République.
              </i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">(voir fiche pour la constitution du dossier de mariage)</p>
            <h6 className="font-weight-bold h6-responsive mt-2">Tarif :</h6>
            <p className="descriptn">100.000 F CFA du mercredi au samedi.</p>
            <h6 className="font-weight-bold h6-responsive mt-2">Documents délivrés à l’issue du
              mariage :
            </h6>
            <p className="descriptn">
              {
                civil[12].mariagecivil
              }
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <h5 className="h5-responsive mytitle font-weight-bold">
              Déclarer un décès
            </h5>
            <span>
              <h6 className="font-weight-bold h6-responsive">Lieu:</h6>
              <i className="descriptn"> Mairie du lieu de décès</i>
            </span>
            <h6 className="font-weight-bold h6-responsive mt-2">Pièces à fournir :</h6>
            <p className="descriptn">
              {
                civil[13].deces
              }
            </p>
            <h6 className="font-weight-bold h6-responsive mt-2">Délai :</h6>
            <p className="descriptn">Quinze (15) jours à compter du jour du décès.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
