import React from "react";
import "./styles/commune.css";
import { View } from "mdbreact";
import { Link } from "react-router-dom";

export default function Commune() {
  return (
    <div className="">
      <div className="container">
        <h3 className="mt-5 mb-2 text-green h3-responsive mytitle">
          {" "}
          LA COMMUNE{" "}
        </h3>
        <div className="row mt-3">
          <div className="col-md text-center">
            <View zoom>
              <img
                src={require("../components/img/histoire_aboisso.jpg")}
                alt="histoire"
                className="img-thumbnail img-responsive"
              />
            </View>
            <h5 className="h5-responsive mt-2 float-left font-weight-bold">
              <Link to="/historique-aboisso" className="black-text">
                Historique de la ville
              </Link>
            </h5>
          </div>
          <div className="col-md text-center">
            <View zoom>
              <img
                src={require("../components/img/patrimoine.png")}
                alt="patrimoine"
                className="img-thumbnail img-responsive"
              />
            </View>
            <h5 className="h5-responsive mt-2 float-left font-weight-bold">
              <Link to="/decouvrir-aboisso" className="black-text">
                Découvrir la ville
              </Link>
            </h5>
          </div>
          <div className="col-md text-center">
            <View zoom>
              <img
                src={require("../components/img/marche.png")}
                alt="marche"
                className="img-thumbnail img-responsive"
              />
            </View>
            <h5 className="h5-responsive mt-2 float-left font-weight-bold">
              <Link to="/decouvrir-aboisso" className="black-text">
                La vie économique de la ville
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
