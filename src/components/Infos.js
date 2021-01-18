import React from "react"
import "./styles/infos.css"
import News from "../components/containers/News"
import {MDBContainer, MDBRow, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardBody, MDBCol, MDBBadge } from "mdbreact"
import { Link} from 'react-router-dom'

export default class Infos extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <MDBContainer fluid className="effects-layer">
        <MDBRow className="element">
          <MDBCol md="3">
            <h1 className="text-green ovaheading"> A LA UNE </h1>
            <p className="sub-title">
              Les nouvelles des activités récentes pour les peuples nécessaires.
            </p>
          </MDBCol>
          <MDBCol md="9" className="_colcard mt-5 mb-5">
            {News.map((news, key) => (
              <MDBCard className="_card" key={key}>
                <MDBCardImage className="img-fluid" src={news.img} waves style={{position: 'relative'}} />
                <MDBBadge
                  color="warning"
                  style={{ position: "absolute" }}
                >
                  Lundi, 18 janv 2021
                </MDBBadge>
                <MDBCardBody>
                  <MDBCardTitle>{news.title}</MDBCardTitle>
                  <MDBCardText className="">
                    {`${news.text.substring(0, 90)}...........`}
                  </MDBCardText>
                  <Link
                    to="/a-la-une"
                    className="btn"
                    style={{
                      color: "white",
                      backgroundColor: "green",
                    }}
                  >
                    Lire plus
                  </Link>
                </MDBCardBody>
              </MDBCard>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
