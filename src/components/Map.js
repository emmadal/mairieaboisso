import React, {useState}from 'react'
import './styles/map.css'
import {Input, FormGroup} from 'reactstrap'
import {Button, Fa} from 'mdbreact'

export default function Map() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [object, setObject] = useState('')
  const [msg, setMsg] = useState([])

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleObjectChange(e) {
    setObject(e.target.value)
  }
  function handleMsgChange(e) {
    setMsg(e.target.value)
  }

  return(
    <div className="container">
    <h1 className="mt-5 mb-2 text-green h1-responsive mytitle"> NOUS CONTACTER</h1>
      <div className="row mt-4">
        <div className="col-md-12">
          <iframe
            title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.6429621610087!2d-3.2064370502586583!3d5.471010696013044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc25b899646d889%3A0xefb74ac68cfc8514!2sMairie+D&#39;aboisso!5e0!3m2!1sfr!2sci!4v1541265336060" width="100%" height="450" frameBorder="0"  allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Input type="email" className="form-control" placeholder="Vote email" value={email}
            onChange={handleEmailChange}
          />
          <Input type="text" className="form-control" placeholder="Vote objet" value={object}
            onChange={handleObjectChange}
          />
          <Input type="text" className="form-control" placeholder="Vote nom" value={name}
            onChange={handleNameChange}
          />
          <FormGroup>
            <Input type="textarea" className="form-control mt-4" placeholder="Vote Message" value={msg}
            onChange={handleMsgChange}
            />
          </FormGroup>
          <Button outline color="green">Envoyer <Fa icon="send" className="ml-1"/></Button>
        </div>
      </div>
    </div>
  )
}
