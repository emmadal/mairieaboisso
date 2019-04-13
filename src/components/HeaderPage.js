import React, { Component } from 'react';

const image = require('./img/header.png')

export default class HeaderPage extends Component {
  render() {
    return (
      <div className="container">
        <section style={{backgroundImage:`url(${image})`, backgroundSize:"cover", height:"auto"}}>
        <div className="container " >
          <div className="row mt-5">
            <div className="col-md-12" >
              <div className="mb-5">
                <h1 className="h1-responsive text-center font-weight-bold text-uppercase
                  text-white mb-5 mt-5 flex-wrap"
                  style={{fontSize:"60px", wordWrap:"break-word"}}>{this.props.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    );
  }
}
