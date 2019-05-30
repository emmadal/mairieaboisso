import React from 'react'
import {MBContainer, MDBRow, MDBCol, MDBContainer, MDBBtn} from 'mdbreact'
import '../styles/errorsecurity.css'

export default function ErrorSecurity() {
    return (
      <>
        <MDBContainer className="_cont" fluid>
          <img
            src={require("../img/error.png")}
            className="img-fluid tex-left"
            alt="error"
          />
          <h4 className="h4-responsive font-weight-bold mb-5">
            Votre connexion n'est pas privée
          </h4>
          <MDBRow>
            <MDBCol sm="6">
              <p className="text-justify">
                Il se peut que des pirates soient en train d'éssayer de
                dérober vos informations sur le site{" "}
                <strong>https://mairieaboisso.herokuapp.com</strong> (par
                exemple, des mots de passe, des messages ou des informations
                sur vos cartes de paiement). NET::ERR_CERT_AUTHORITY_INVALID
              </p>
            </MDBCol>
            <MDBCol sm="6" />
          </MDBRow>
          <MDBRow>
            <MDBCol sm="6">
              <p className="">
                Impossible de vérifier sur le serveur qu'il s'agit bien du
                domaine <strong>https://mairieaboisso.herokuapp.com</strong>
                , car son certificat de sécurité n'est pas considéré comme
                fiable par le systeme d'exploitation de votre ordinateur.
                Cela peut être dû à une mauvaise configuration ou bien à
                l'interception de votre connexion par un pirate informatique
              </p>
            </MDBCol>
            <MDBCol sm="6">
              <MDBBtn color="primary">Retour a la sécurité</MDBBtn>
            </MDBCol>
            <MDBCol sm="6">
              <p>
                La page que vous essayez de consulter ne peut être affichée car son certificat de sécurité est invalide dans la réponse du serveur.
              </p>
              <p>
                Veuillez contacter le service{" "}
                <a href="https://www.heroku.com/support" target="_blank" rel="noopener noreferrer">Technique</a> pour
                les informer du problèmes
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
}