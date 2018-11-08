import React from 'react'
import './styles/commune.css'
import {View} from 'mdbreact'
import {Link} from 'react-router-dom'

export default function Commune() {
  return(
    <div className="">
        <div className="container">
          <h1 className="mt-5 mb-2 text-green h1-responsive mytitle"> LA COMMUNE </h1>
          <div className="row mt-3">
            <div className="col-md text-center">
              <View zoom>
                <img src={require('../components/img/histoire_aboisso.jpg')} alt="histoire"
                  className="img-thumbnail img-responsive"
                />
              </View>
              <h4 className="h4-responsive mt-2 float-left font-weight-bold">
                <Link to="/historique-aboisso" className="black-text">
                  Historique de la ville
                </Link>
              </h4>
            </div>
            <div className="col-md text-center">
              <View zoom>
                <img src={require('../components/img/patrimoine.png')} alt="patrimoine"
                  className="img-thumbnail img-responsive"
                />
              </View>
              <h4 className="h4-responsive mt-2 float-left font-weight-bold">
              <Link to="/decouvrir-aboisso" className="black-text">
                Decouvrir la ville
              </Link>
              </h4>
            </div>
            <div className="col-md text-center">
              <View zoom>
                <img src={require('../components/img/education.png')} alt="education"
                  className="img-thumbnail img-responsive"
                />
              </View>
              <h4 className="h4-responsive mt-2 float-left font-weight-bold">
              <Link to="/decouvrir-aboisso" className="black-text">
                Le systeme educatif à Aboisso
              </Link>
              </h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md text-center">
              <View zoom>
                <img src={require('../components/img/valeurs.png')} alt="valeurs"
                  className="img-thumbnail img-responsive"
                />
              </View>
              <h4 className="h4-responsive mt-2 float-left font-weight-bold">
                <Link to="/decouvrir-aboisso" className="black-text">
                  Nos valeurs
                </Link>
              </h4>
            </div>
            <div className="col-md text-center">
              <View zoom>
                <img src={require('../components/img/marche.png')} alt="marche"
                  className="img-thumbnail img-responsive"
                />
              </View>
              <h4 className="h4-responsive mt-2 float-left font-weight-bold">
                <Link to="/decouvrir-aboisso" className="black-text">
                  La ville economique de la ville
                </Link>
              </h4>
            </div>
            <div className="col-md text-center">
              <View zoom>
                <img src={require('../components/img/securite.png')} alt="securite"
                  className="img-thumbnail img-responsive"
                />
              </View>
              <h4 className="h4-responsive mt-2 float-left font-weight-bold">
                <Link to="/decouvrir-aboisso" className="black-text">
                  La securite à Aboisso
                </Link>
              </h4>
            </div>
          </div>
        </div>
    </div>
  )
}
