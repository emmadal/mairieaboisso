import React, {useState, useEffect} from 'react'
import './styles/director.css'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'mdbreact'

export default function Direcctor() {
  const [modal, SetModal] = useState(false)

  function toogle() {
    SetModal(true)
  }

  useEffect(() =>{
    //toogle()
    return () => {
      SetModal(false)
    }
  })

  return(
    <div className="">
      <Modal isOpen={modal} toggle={toogle}>
        <ModalHeader toggle={toogle}>
          <p className="font-weight-bold">Le mot du Maire</p>
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-md">
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <p className="text-justify">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
            <Button color="green" onClick={() => {SetModal(false)} }>Quitter</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
