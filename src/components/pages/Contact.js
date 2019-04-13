import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../containers/firebase'
import {contact} from '../containers/mairie'

class Contact extends React.Component  {
	constructor(props){
		super(props)
		this.state = {
    fname: '',
    lname: '',
    email: '',
    city: '',
    state: '',
    num: '',
    message:''
  }
  this.submitHandler = this.submitHandler.bind(this)
  this.sendData = this.sendData.bind(this)
  this.changeHandler = this.changeHandler.bind(this)
  this.notify = this.notify.bind(this)
  this.notifyFailed = this.notifyFailed.bind(this)
}
	notify = () => toast.success('Message envoye avec success 😄', {
		position: "top-right",
		autoClose: "5000",
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	});

	notifyFailed = () => toast.warning("Message non envoye 😢", {
		position: "top-right",
		autoClose: "5000",
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
	});



  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';
    this.sendData() == true ? this.notify() : this.notifyFailed()

  }

  sendData = async (event) => {
  	const res = await firebase.database().ref('Message')
  	res.push({
  		"Nom":this.state.fname,
  		"Prenom":this.state.lname,
  		"email":this.state.email,
  		"message":this.state.message,
  		"contact":this.state.num,
  		"Date du message" : Date()
  	})
  	this.setState({
  		fname: '',
    	lname: '',
    	email: '',
    	city: '',
    	state: '',
    	num: '',
    	message:''
  	})
  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  render() {
    return(
      <Container className="mt-5">
      <h3 className="my-3 text-green h3-responsive mytitle"> Contact </h3>
      <ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover
				/>
				<Row className="">
					<Col sm="12" className="mt-3 mb-3">
						{
							contact.map((text, key) =>(
								<p className="descriptn text-justify">{text.name}</p>
							))
						}
					</Col>
				</Row>
        <Row className="mt-6">
          <Col md="">
            <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
            <Row>
              <div className="col-md-4 mb-3">
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Nom</label>
                <input value={this.state.fname} name='fname' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Votre nom" required/>
                <div className="valid-feedback">Validation complete!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">Prenom</label>
                <input value={this.state.lname} name='lname' onChange={this.changeHandler} type="text" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Votre prenom" required/>
                <div className="valid-feedback">Validation complete!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Email</label>
                <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>
                <small id="emailHelp" className="form-text text-muted">Nous ne publierons jamais votre e-mail</small>
              </div>
            </Row>
            <Row>
              <div className="col-md-4 mb-3">
                <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Ville</label>
                <input value={this.state.city} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='city' placeholder="Votre ville" required/>
                <div className="invalid-feedback">Veuillez entrer une ville.</div>
                <div className="valid-feedback">Validation complete!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Region</label>
                <input value={this.state.state} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='state' placeholder="Region" required/>
                <div className="invalid-feedback">Veuilez entrer votre region.</div>
                <div className="valid-feedback">Validation complete!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">numero de telephone</label>
                <input value={this.state.num} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='num' placeholder="Numero de telephone" required/>
                <div className="invalid-feedback">Veuillez entrer votre numero.</div>
                <div className="valid-feedback">Validation complete!</div>
              </div>
            </Row>
            <Row>
            	<div className="col-md-12 my-3">
            		<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
            			Votre message
            		</label>
            		<textarea value={this.state.message} className="form-control" id="exampleFormControlTextarea3" rows="7"
            			name='message' onChange={this.changeHandler} required>
            		</textarea>
            		<div className="invalid-feedback">Veuillez ecrire votre message.</div>
                <div className="valid-feedback">Validation complete!</div>
            	</div>
            </Row>
            <div className="col-md-4 mb-3">
              <div className="form-check pl-0">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="form-check-label" htmlFor="invalidCheck">
                 Accepter les termes et conditions
                </label>
                <div className="invalid-feedback">
                  Vous devez accepter les conditions avant de soumettre.
                </div>
              </div>
            </div>
            <button className="btn btn-green" type="submit">Envoyer</button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Contact
