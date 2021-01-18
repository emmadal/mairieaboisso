import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./styles/menu.css";
import { Route, Link } from "react-router-dom";

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
            <NavbarBrand>
              <Link to="/" className="text-white font-weight-bold">
                ACCUEIL
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
                      <Link
                        to="/historique-aboisso"
                        className="text-success font-weight-bold"
                      >
                        Historique de la ville
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/decouvrir-aboisso"
                        className="text-success font-weight-bold"
                      >
                        Découvrir la ville
                      </Link>
                    </DropdownItem>
                    {/* <DropdownItem className="text-success">
                      <Link
                        to="/projets"
                        className="text-success font-weight-bold"
                      >
                        Les grands projets
                      </Link>
                    </DropdownItem> */}
                    <DropdownItem className="text-success">
                      <Link
                        to="/adresses-utiles"
                        className="text-success font-weight-bold"
                      >
                        Les adresses utiles
                      </Link>
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
                      <Link
                        to="/maire"
                        className="text-success font-weight-bold"
                      >
                        Le Maire
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/municipalite"
                        className="text-success font-weight-bold"
                      >
                        La Municipalité
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/conseil-municipal"
                        className="text-success font-weight-bold"
                      >
                        Le Conseil Municipal
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/commissions"
                        className="text-success font-weight-bold"
                      >
                        Les Commissions
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/services-municipaux"
                        className="text-success font-weight-bold"
                      >
                        Les Services Municipaux
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/police-municipale"
                        className="text-success font-weight-bold"
                      >
                        La Police Municipale
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    DEMARCHES
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <Link
                        to="/etat-civil"
                        className="text-success font-weight-bold"
                      >
                        Etat Civil
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/services-techniques"
                        className="text-success font-weight-bold"
                      >
                        Services techniques
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/socio-culturels"
                        className="text-success font-weight-bold"
                      >
                        Services socio culturels
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    className="text-white font-weight-bold"
                  >
                    PROJETS
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="text-success">
                      <Link
                        to="/realises"
                        className="text-success font-weight-bold"
                      >
                        Réalisés
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/encours"
                        className="text-success font-weight-bold"
                      >
                        En cours
                      </Link>
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
                      <Link
                        to="/partenariat"
                        className="text-success font-weight-bold"
                      >
                        Partenariat
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/jumellage"
                        className="text-success font-weight-bold"
                      >
                        Jumelage
                      </Link>
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
                      <Link
                        to="/audiences"
                        className="text-success font-weight-bold"
                      >
                        Compte rendu des audiences
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/arretes-municipaux"
                        className="text-success font-weight-bold"
                      >
                        Arretes Municipaux
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-success">
                      <Link
                        to="/proces-verbaux"
                        className="text-success font-weight-bold"
                      >
                        Proces-verbaux
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <Link to="/contact" className="white-text font-weight-bold">
                    CONTACT
                  </Link>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Route>
    );
  }
}
