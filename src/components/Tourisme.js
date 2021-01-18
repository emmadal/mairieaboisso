import React from "react"
import { description } from "./containers/Description"
import { MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import './styles/tourisme.css'

export default function Tourisme() {
  return (
      <MDBContainer fluid className="_container">
        <h3 className="mb-2 text-green title">
          {" "}
          SITES TOURISTIQUES{" "}
        </h3>
        <MDBRow>
          <MDBCol sm="12">
            <p className="text-justify text-justify descriptn">
              {description[0].text}
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol sm="4">
            <iframe
              title="palais"
              src="https://www.youtube.com/embed/F5OdjskR6B8?ecver=2"
              width="400"
              height="300"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <h5 className="h5-responsive mt-2 font-weight-bold float-left">
              Le palais de la Monin Bia à Ayamé
            </h5>
          </MDBCol>
          <MDBCol sm="4">
            <iframe
              title="auberge"
              src="https://www.youtube.com/embed/BiJ6BTtSH7M?ecver=2"
              width="400"
              height="300"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <h5 className="h5-responsive mt-2 float-left font-weight-bold float-left">
              L' Auberge Akwaba à Krinjabo
            </h5>
          </MDBCol>
          <MDBCol sm="4">
            <iframe
              title="bia"
              src="https://www.youtube.com/embed/6JSdNSsABG4?ecver=2"
              width="400"
              height="300"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <h5 className="h5-responsive mt-2 float-left font-weight-bold">
              Vue du fleuve BIA
            </h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

  )
}
