import React from 'react'
import './styles/banniere.css'

export default function Banniere() {
  return(
    <div className="">
        <div className="container">
          <div className="row mybanniere">
            <div className="col-md-4 ">
              <img src={require('../components/img/BANNIERE.jpg')} alt="banniere"
                className="mybanniere"
              />
            </div>
            <div className="col-md-8">
              <h3 className="h3-responsive textbaniere">MAIRE DE LA VILLE D'ABOISSO</h3>
              <h5 className="h5-responsive textbaniere">Le vrai changement avec Jeremie Alfred
              N'Gouan
              </h5>
            </div>
          </div>
          </div>
    </div>
  )
}
