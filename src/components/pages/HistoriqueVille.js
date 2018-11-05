import React from 'react'
import {description} from '../containers/Description'
import '../styles/historiqueville.css'

export default function HistoriqueVille() {
  return(
    <div>
      <div className="container">
        <h1 className="mt-5 mb-5 text-green h1-responsive mytitle"> Historique d'Aboisso </h1>
        <div className="row">
          <div className="col-md-12">
            <img src={require('../img/histoire_aboisso_large.jpg')} className="img-fluid rounded" alt="Histoire"/>
          </div>          
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-justify descriptn">
              {
                description[1].text
              }
            </p>
          </div>          
        </div>
      </div>
    </div>
  )
}
