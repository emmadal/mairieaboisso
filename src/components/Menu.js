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
                    LA COMMUNE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink href="/historique-aboisso" className="text-success font-weight-bold">Historique de la ville</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/decouvrir-aboisso" className="text-success font-weight-bold">Decouvrir la ville</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/amenagements-urbains" className="text-success font-weight-bold">Amenagements urbains</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/adresses-utiles" className="text-success font-weight-bold">Les adresses utiles</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="text-white font-weight-bold">
                    LA MAIRIE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink href="/presentation" className="text-success font-weight-bold">Presentation de la Mairie</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/etat-civil" className="text-success font-weight-bold">Etat civil</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="text-white font-weight-bold">
                    ACTIONS SOCIALES
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink href="/demande-autorisation" className="text-success font-weight-bold">Demande d'autorisation</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/prise-charge" className="text-success font-weight-bold">Demande de prise en charge</NavLink>
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
                      <NavLink href="/activites-cuturelles" className="text-success font-weight-bold">Activites culturelles</NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink href="/sites-touristiques" className="text-success font-weight-bold">Sites tourstiques</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavLink href="/contact" className="white-text font-weight-bold">CONTACT</NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

      </Route>
    );
  }
}
