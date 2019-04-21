import React from "react"
import "./styles/infos.css"
import News from "../components/containers/News"
import { NavLink } from "reactstrap"
import { Card, CardImage, CardTitle, CardText, CardBody } from "mdbreact"

export default class Infos extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="">
        <div className="container">
          <h3 className="mt-5 mb-2 text-green h3-responsive mytitle">
            {" "}
            A LA UNE{" "}
          </h3>
          <div className="row ">
            {News.map((news, key) => (
              <div className="col-md mt-3" key={key}>
                <Card>
                  <CardImage className="img-fluid" src={news.img} waves />
                  <CardBody>
                    <CardTitle>{news.title}</CardTitle>
                    <CardText className="">
                      {`${news.text.substring(0, 150)}...........`}
                    </CardText>
                    <NavLink
                      href="/a-la-une"
                      className="btn"
                      style={{
                        color: "white",
                        backgroundColor: "green"
                      }}
                    >
                      Lire plus
                    </NavLink>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
