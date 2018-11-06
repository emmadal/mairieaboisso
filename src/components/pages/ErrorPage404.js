import React from 'react'

export default function ErrorPage404() {
  return(
    <div>
      <div className="container">
        <h1 className="mt-5 mb-5 text-green h1-responsive mytitle"> Aucune page trouve !</h1>
        <div className="row">
          <div className="col-md-12">
            <iframe 
            title="error"
            src="https://giphy.com/embed/eWJKz0mvZwbL2" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>          
        </div>
      </div>
    </div>
  )
}

