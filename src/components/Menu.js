import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './styles/menu.css'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar color="success" light expand="md" className="bordermenu">
          <NavbarBrand href="/" className="text-white font-weight-bold">ACCEUIL</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="/components/" className="text-white font-weight-bold">COMPONENTS
              </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white font-weight-bold">
                  LA MAIRIE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="text-success">
                    Historique de la ville
                  </DropdownItem>
                  <DropdownItem className="text-success">
                    Decouvrir la ville
                  </DropdownItem>
                  <DropdownItem className="text-success">
                    Patrimoine de la ville
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white font-weight-bold">
                  PROJETS URBAINS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="text-success">
                    Amenagements urbains
                  </DropdownItem>
                  <DropdownItem className="text-success">
                    Au coeur des quartiers
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white font-weight-bold">
                  A DECOUVRIR
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="text-success">
                    Royaume du SANWI
                  </DropdownItem>
                  <DropdownItem className="text-success">
                    Sites touristiques
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
