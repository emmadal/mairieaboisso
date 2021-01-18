import React from "react"
import "./styles/map.css"
import {MDBContainer, MDBCol, MDBRow} from 'mdbreact'

export default function Map() {
  return (
    <MDBContainer fluid>
      {/* <h3 className="mt-5 mb-2 text-green title"> NOUS CONTACTER</h3> */}
      <MDBRow>
        <MDBCol md="4" className="mt-5">
          <p className="text-justify _description">
            Nous apprécions vraiment que vous preniez le temps de nous
            contacter. S'il vous plaît remplir le formulaire ci-dessous.
          </p>
          <h4 className="h4-responsive font-weight-bold mt-3">Mairie d'Aboiso</h4>
          <div className="ova-contact-info type1">
            <div className="icon">
              <i className="fa fa-map-marker"></i>{" "}
            </div>
            <div className="address">
              <span className="text_link">
                <a href="tel:">
                  Adresse: <span>Non loin des Impôts Aboisso</span>
                </a>
              </span>
            </div>
          </div>
          <div className="ova-contact-info type1">
            <div className="icon">
              <i className="fa fa-phone"></i>{" "}
            </div>

            <div className="address">
              <span className="text_link">
                <a href="tel:21304123">
                  Appelez: <span>21 30 41 23 / 21 30 68 15</span>
                </a>
              </span>
            </div>
          </div>
          <div className="ova-contact-info type1">
            <div className="icon">
              <i className="fa fa-envelope"></i>{" "}
            </div>
            <div className="address">
              <span className="text_link">
                <a href="mailto:contact@mairieaboisso.com">
                  Email: <span>contact@mairieaboisso.com</span>
                </a>
              </span>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="8" className="_maps px-0">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.6429621610087!2d-3.2064370502586583!3d5.471010696013044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc25b899646d889%3A0xefb74ac68cfc8514!2sMairie+D&#39;aboisso!5e0!3m2!1sfr!2sci!4v1541265336060"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
