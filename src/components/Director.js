import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

class Director extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  componentDidMount() {
    this.toggle()
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>
            <p className="font-weight-bold text-center">Le mot du Maire</p>
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-md">
                  <p className="text-justify">
                    <strong className="font-weight-bold">Akwaba Aboisso</strong>
                    , ville historique par excellence dans l’édification de la
                    Cote d’Ivoire moderne, Aboisso regorge des richesses
                    naturels et des atouts à la fois culturels, touristiques et
                    culinaires. Aboisso est chef-lieu de région du sud Comoé et
                    le berceau du royaume Sanwi le plus puissant de l’histoire
                    de la Cote d’Ivoire. Je vous invite à visiter cette ville
                    extraordinaire et à nous accompagner dans notre
                    développement en y investissant, car notre ambition est de
                    faire d’Aboisso, un pôle de développement et une commune
                    conviviale puis prospère.
                  </p>
                </div>
                <div className="col-md">
                  <img
                    src={require("../components/img/jeremy.png")}
                    alt="maire"
                    className="float-right img-fluid img-thumbnail"
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="green" onClick={this.toggle}>
              Quitter
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Director
