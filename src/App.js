import React from 'react';
import Home from './components/pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HistoriqueVille from './components/pages/HistoriqueVille'
import DecouvrirVille from './components/pages/DecouvrirVille'
import PatrimoineVille from './components/pages/PatrimoineVille'
import Amenagements from './components/pages/Amenagements'
import Quartiers from './components/pages/Quartiers'
import Royaume from './components/pages/Royaume'
import SitesTourisme from './components/pages/SitesTourisme'
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
        <Route path="/patrimoine-aboisso" component={PatrimoineVille} />
        <Route path="/amenagements-urbains" component={Amenagements} />
        <Route path="/au-coeur-des-quartiers" component={Quartiers} />
        <Route path="/royaume-sanwi" component={Royaume} />
        <Route path="/sites-touristiques" component={SitesTourisme} />
        <Route component={ErrorPage404}/>
      </Switch>
      <FooterPage />
      </div>
    </BrowserRouter>
  )
}

export default App;
