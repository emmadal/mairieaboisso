import React from "react";
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import './styles/director.css'

class Director extends React.Component {
  constructor(props) {
    super();
      }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="4" className="maire"></MDBCol>
          <MDBCol md="8" className="maireSentenceBlock">
            <h2 className="text-center font-weight-bold title text-white">
              8e Maire de la ville d'Aboisso, <br />
              élu en 2018
            </h2>
            <p className="text-justify m-5 sentence">
              <strong className="font-weight-bold">Akwaba Aboisso</strong>,
              ville historique par excellence dans l’édification de la Cote
              d’Ivoire moderne, Aboisso regorge des richesses naturels et des
              atouts à la fois culturels, touristiques et culinaires. Aboisso
              est chef-lieu de région du sud Comoé et le berceau du royaume
              Sanwi le plus puissant de l’histoire de la Cote d’Ivoire. Je vous
              invite à visiter cette ville extraordinaire et à nous accompagner
              dans notre développement en y investissant, car notre ambition est
              de faire d’Aboisso, un pôle de développement et une commune
              conviviale puis prospère.
            </p>
            <span className="second_font text-warning ml-5">
              – L'honorable N'GOUAN JEREMIE ALFRED,
            </span>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Director;
