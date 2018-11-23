import React, {useState}from 'react'
import './styles/map.css'
import {Input} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from './containers/firebase'

export default function Map() {

  const [email, setEmail] = useState('')
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  const notify = () => toast.success('Inscription effectuee avec succes 😄', {
    position: "top-right",
    autoClose: "5000",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const newsLetterSignin = async () => {
    const news = await firebase.database().ref('Newsletters')
    news.push({
      "Email inscrit": email,
      "Date d'inscription": Date()
    })
    notify()
    setEmail('')
  }


  return(
    <div>
      <div className="container">
        <h3 className="mt-5 mb-2 text-green h3-responsive mytitle"> NOUS CONTACTER</h3>
        <div className="row mt-4">
          <div className="col-md-12">
            <iframe
              title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.6429621610087!2d-3.2064370502586583!3d5.471010696013044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc25b899646d889%3A0xefb74ac68cfc8514!2sMairie+D&#39;aboisso!5e0!3m2!1sfr!2sci!4v1541265336060" width="100%" height="450" frameBorder="0"  allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

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

      <div className="container mt-4">
        <div className="row newsletter mt-3">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <p className="descriptn font-weight-bold mt-3">S'inscrire a notre newsletters</p>
          </div>
          <div className="col-md-6">
            <Input type="email" className="form-control"
              placeholder="votre email" value={email} onChange={handleEmailChange}
            />
          </div>
          <div className="col-md-2 ">
            <button className="btn btn-green" type="submit"
              onClick={() => newsLetterSignin()}>
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
