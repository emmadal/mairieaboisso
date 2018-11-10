import React from 'react';
import Home from './components/pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HistoriqueVille from './components/pages/HistoriqueVille'
import DecouvrirVille from './components/pages/DecouvrirVille'
import Amenagements from './components/pages/Amenagements'
import Quartiers from './components/pages/Quartiers'
import Royaume from './components/pages/Royaume'
import AdressesUtiles from './components/pages/AdressesUtiles'
import ConseilMunicipal from './components/pages/ConseilMunicipal'
import Organigrammes from './components/pages/Organigrammes'
import SitesTourisme from './components/pages/SitesTourisme'
import MotMaire from './components/pages/MotMaire'
import ErrorPage404 from './components/pages/ErrorPage404'
import EtatCivil from './components/pages/EtatCivil'
import FooterPage from './components/FooterPage'
import Banniere from './components/Banniere'

function App() {
  return(
    <BrowserRouter>
      <div>
        <Banniere />
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/historique-aboisso" component={HistoriqueVille} />
        <Route path="/etat-civil" component={EtatCivil} />
        <Route path="/decouvrir-aboisso" component={DecouvrirVille} />
        <Route path="/amenagements-urbains" component={Amenagements} />
        <Route path="/au-coeur-des-quartiers" component={Quartiers} />
        <Route path="/mot-maire" component={MotMaire} />
        <Route path="/sites-touristiques" component={SitesTourisme} />
        <Route path="/royaume-sanwi" component={Royaume} />
        <Route path="/adresses-utiles" component={AdressesUtiles} />
        <Route path="/conseil-municipal" component={ConseilMunicipal} />
        <Route path="/services" component={Organigrammes} />
        <Route component={ErrorPage404}/>
      </Switch>
      <FooterPage />
      </div>
    </BrowserRouter>
  )
}

export default App;
