import React from 'react'
import './styles/infos.css'
import News from '../components/containers/News'
import {Card, CardImage, CardTitle, CardText, Button, CardBody} from 'mdbreact'

export default function Infos() {
  return(
    <div className="">
        <div className="container">
          <h1 className="mt-3 mb-2 text-green h1-responsive mytitle"> A LA UNE </h1>
          <div className="row ">
            {
              News.map((news) =>(
                <div className="col-md mt-3 text-justify">
                  <Card>
                    <CardImage className="img-fluid" src={news.img} waves />
                    <CardBody>
                      <CardTitle>{news.title}</CardTitle>
                      <CardText>{news.text}</CardText>
                      <Button href="#" color="green">Lire plus</Button>
                    </CardBody>
                  </Card>
                </div>
              ))
            }
          </div>
          </div>
    </div>
  )
}
