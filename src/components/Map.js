import React from "react"
import "./styles/map.css"
import "react-toastify/dist/ReactToastify.css"

export default function Map() {
  return (
    <div>
      <div className="container">
        <h3 className="mt-5 mb-2 text-green h3-responsive mytitle">
          {" "}
          NOUS CONTACTER
        </h3>
        <div className="row mt-4">
          <div className="col-md-12">
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.6429621610087!2d-3.2064370502586583!3d5.471010696013044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc25b899646d889%3A0xefb74ac68cfc8514!2sMairie+D&#39;aboisso!5e0!3m2!1sfr!2sci!4v1541265336060"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
