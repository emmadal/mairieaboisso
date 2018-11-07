import React from 'react'
import './styles/tourisme.css'
import {description} from './containers/Description'

export default function Tourisme() {
  return(
    <div className="">
        <div className="container">
          <h1 className="mt-5 mb-2 text-green h1-responsive mytitle"> SITES TOURISTIQUES </h1>
          <div className="row">
            <div className="col-md-12">
              <p className="text-justify text-justify descriptn">{description[0].text}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md">
              <iframe
                title="palais"
                src="https://www.youtube.com/embed/F5OdjskR6B8?ecver=2"
                width="300" height="225" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
              </iframe>
              <h5 className="h5-responsive mt-2 font-weight-bold float-left">Le palais de la
                Monin Bia à Ayamé
              </h5>
            </div>
            <div className="col-md">
              <iframe
                title="auberge"
                src="https://www.youtube.com/embed/BiJ6BTtSH7M?ecver=2"
                width="300" height="225" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
              </iframe>
              <h5 className="h5-responsive mt-2 float-left font-weight-bold float-left">L'
                Auberge Akwaba à Krinjabo
              </h5>
            </div>
            <div className="col-md">
              <iframe
              title="bia"
                src="https://www.youtube.com/embed/6JSdNSsABG4?ecver=2"
                width="300" height="225" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
              </iframe>
              <h5 className="h5-responsive mt-2 float-left font-weight-bold">Vue du fleuve BIA
              </h5>
            </div>
          </div>
        </div>
    </div>
  )
}
