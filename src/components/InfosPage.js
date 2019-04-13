import React from 'react'
import News from '../components/containers/News'
import './styles/infopages.css'


export default function InfosPage(props){
  return(
    <div className="">
      <div className="container">
        <h3 className="mt-5 mb-2 text-green h3-responsive mytitle"> A LA UNE </h3>
          {
            News.map((news, key) =>(
              <div className="row mt-5
                " key={key}>
                <div className="col-md-5">
                  <img src={news.img} alt={news.title} className="img-fluid dataimg"/>
                </div>
                <div className="col-md-7">
                  <h4 className="text-green mytitle text-center h4-responsive">{news.title}</h4>
                  <p className="text-justify descriptn">{news.text}</p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}
