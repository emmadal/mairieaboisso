import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './styles/menu.css'
  import {Route} from 'react-router-dom'

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
      <Route>
        <div className="container">
          <Navbar color="" light expand="md" className="bordermenu">
            <NavbarBrand href="/" className="text-white font-weight-bold">ACCEUIL</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar >
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="text-white font-weight-bold">
                    LA MAIRIE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink href="/historique-aboisso" className="text-success font-weight-bold">Historique de la ville</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/decouvrir-aboisso" className="text-success font-weight-bold">Decouvrir la ville</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/etat-civil" className="text-success font-weight-bold">Etat civil</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/patrimoine-aboisso" className="text-success font-weight-bold">Patrimoine de la ville</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="text-white font-weight-bold">
                    PROJETS URBAINS
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink href="/amenagements-urbains" className="text-success font-weight-bold">Amenagements urbains</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/au-coeur-des-quartiers" className="text-success font-weight-bold">Au coeur des quartiers</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="text-white font-weight-bold">
                    A DECOUVRIR
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink href="/royaume-sanwi" className="text-success font-weight-bold">Royaume du SANWI</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/sites-touristiques" className="text-success font-weight-bold">Sites tourstiques</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

      </Route>
    );
  }
}
