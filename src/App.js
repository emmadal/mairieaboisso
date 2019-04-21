import React from "react"
import Home from "./components/pages/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HistoriqueVille from "./components/pages/HistoriqueVille"
import DecouvrirVille from "./components/pages/DecouvrirVille"
import Amenagements from "./components/pages/Amenagements"
import Cultures from "./components/pages/Cultures"
import Royaume from "./components/pages/Royaume"
import PriseCharge from "./components/pages/PriseCharge"
import AdressesUtiles from "./components/pages/AdressesUtiles"
import Presentation from "./components/pages/Presentation"
import Contact from "./components/pages/Contact"
import SitesTourisme from "./components/pages/SitesTourisme"
import ErrorPage404 from "./components/pages/ErrorPage404"
import EtatCivil from "./components/pages/EtatCivil"
import Autorisation from "./components/pages/Autorisation"
import FooterPage from "./components/FooterPage"
import Banniere from "./components/Banniere"
import InfosPage from "./components/InfosPage"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Banniere />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/historique-aboisso" component={HistoriqueVille} />
          <Route path="/etat-civil" component={EtatCivil} />
          <Route path="/contact" component={Contact} />
          <Route path="/prise-charge" component={PriseCharge} />
          <Route path="/decouvrir-aboisso" component={DecouvrirVille} />
          <Route path="/amenagements-urbains" component={Amenagements} />
          <Route path="/a-la-une" component={InfosPage} />
          <Route path="/sites-touristiques" component={SitesTourisme} />
          <Route path="/royaume-sanwi" component={Royaume} />
          <Route path="/adresses-utiles" component={AdressesUtiles} />
          <Route path="/presentation" component={Presentation} />
          <Route path="/activites-cuturelles" component={Cultures} />
          <Route path="/demande-autorisation" component={Autorisation} />
          <Route component={ErrorPage404} />
        </Switch>
        <FooterPage />
      </div>
    </BrowserRouter>
  )
}

export default App
