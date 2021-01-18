import React from "react";
import "./styles/commune.css";
import { View, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import histoire_aboisso from "../components/img/histoire_aboisso.jpg";
import patrimoine from "../components/img/patrimoine.png"
import marche from "../components/img/marche.png";

export default function Commune() {
  return (
    <MDBContainer fluid className="layer">
      <h3 className="mb-2 text-green h3-responsive title">
        {" "}
        LA COMMUNE{" "}
      </h3>
      <MDBRow className="mt-4">
        <MDBCol sm="4" className="text-center">
          <View zoom>
            <img
              src={histoire_aboisso}
              alt="histoire"
              className="img-thumbnail img-fluid"
            />
          </View>
          <h5 className="h5-responsive mt-2 float-left font-weight-bold">
            <Link to="/historique-aboisso" className="black-text">
              Historique de la ville
            </Link>
          </h5>
        </MDBCol>
        <MDBCol sm="4" className="text-center">
          <View zoom>
            <img
              src={patrimoine}
              alt="patrimoine"
              className="img-thumbnail img-fluid"
            />
          </View>
          <h5 className="h5-responsive mt-2 float-left font-weight-bold">
            <Link to="/decouvrir-aboisso" className="black-text">
              Découvrir la ville
            </Link>
          </h5>
        </MDBCol>
        <MDBCol sm="4" className="text-center">
          <View zoom>
            <img
              src={marche}
              alt="marche"
              className="img-thumbnail img-fluid"
            />
          </View>
          <h5 className="h5-responsive mt-2 float-left font-weight-bold">
            <Link to="/decouvrir-aboisso" className="black-text">
              La vie économique de la ville
            </Link>
          </h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
