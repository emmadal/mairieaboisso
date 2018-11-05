import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Director extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentDidMount(){
    this.toggle()
  }

  render() {
    return (
      <div>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}
          size='lg'>
          <ModalHeader toggle={this.toggle}>
            <p className="font-weight-bold text-center">Le mot du Maire</p>
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-md">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
                <div className="col-md">
                  <img src={require('../components/img/maireaboisso.png')} alt="maire"  className="float-right img-fluid img-thumbnail"/>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="green" onClick={this.toggle}>Quitter</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Director;
