import React from "react";
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
  DropdownItem
} from "reactstrap";
import "./styles/menu.css";
import { Route } from "react-router-dom";

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
            <NavbarBrand href="/" className="text-white font-weight-bold">
              ACCEUIL
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar >
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    LA COMMUNE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/historique-aboisso"
                        className="text-success font-weight-bold"
                      >
                        Historique de la ville
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/decouvrir-aboisso"
                        className="text-success font-weight-bold"
                      >
                        Decouvrir la ville
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/projets"
                        className="text-success font-weight-bold"
                      >
                        Les grands projets
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/adresses-utiles"
                        className="text-success font-weight-bold"
                      >
                        Les adresses utiles
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    LA MAIRIE
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/maire"
                        className="text-success font-weight-bold"
                      >
                        Le Maire
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/municipalite"
                        className="text-success font-weight-bold"
                      >
                        La Municipalite
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/conseil-municipal"
                        className="text-success font-weight-bold"
                      >
                        Le Conseil Municipal
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/commissions"
                        className="text-success font-weight-bold"
                      >
                        Les Commissions
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/services-municipaux"
                        className="text-success font-weight-bold"
                      >
                        Les Services Municipaux
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/police-municipale"
                        className="text-success font-weight-bold"
                      >
                        La Police Municipale
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    LES DEMARCHES
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/etat-civil"
                        className="text-success font-weight-bold"
                      >
                        Etat Civil
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/services-techniques"
                        className="text-success font-weight-bold"
                      >
                        Services techniques
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/socio-culturels"
                        className="text-success font-weight-bold"
                      >
                        Services socio culturels
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    COOPERATION
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/partenariat"
                        className="text-success font-weight-bold"
                      >
                        Partenariat
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/jumellage"
                        className="text-success font-weight-bold"
                      >
                        Jumellage
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    ACTUALITES
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/audiences"
                        className="text-success font-weight-bold"
                      >
                        Compte rendu des audiences
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/arretes-municipaux"
                        className="text-success font-weight-bold"
                      >
                        Arretes Municipaux
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <NavLink
                        href="/proces-verbaux"
                        className="text-success font-weight-bold"
                      >
                        Proces-verbaux
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavLink
                  href="/contact"
                  className="white-text font-weight-bold"
                >
                  CONTACT
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Route>
    );
  }
}
