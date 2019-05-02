import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HistoriqueVille from "./components/pages/HistoriqueVille";
import DecouvrirVille from "./components/pages/DecouvrirVille";
import Projets from "./components/pages/Projets";
import Jumellage from "./components/pages/Jumellage";
import Maire from "./components/pages/Maire";
import Municipalite from "./components/pages/Municipalite";
import ConseilMunicipal from "./components/pages/ConseilMunicipal";
import Partenariat from "./components/pages/Partenariat";
import Audiences from "./components/pages/Audiences";
import ServicesTechniques from "./components/pages/ServicesTechniques";
import Commissions from "./components/pages/Commissions.js";
import ServicesMunicipaux from "./components/pages/ServicesMunicipaux.js";
import SocioCulturelles from "./components/pages/SocioCulturelles.js";
import PoliceMunicipale from "./components/pages/PoliceMunicipale";
import ArretesMunicipaux from "./components/pages/ArretesMunicipaux";
import ProcesVerbaux from "./components/pages/ProcesVerbaux";
import AdressesUtiles from "./components/pages/AdressesUtiles";
import Presentation from "./components/pages/Presentation";
import Contact from "./components/pages/Contact";
import ErrorPage404 from "./components/pages/ErrorPage404";
import EtatCivil from "./components/pages/EtatCivil";
import Autorisation from "./components/pages/Autorisation";
import FooterPage from "./components/FooterPage";
import Banniere from "./components/Banniere";
import InfosPage from "./components/InfosPage";
import FlashInfos from './components/FlashInfos'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Banniere />
          <FlashInfos />
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/historique-aboisso" component={HistoriqueVille} />
          <Route path="/arretes-municipaux" component={ArretesMunicipaux} />
          <Route path="/proces-verbaux" component={ProcesVerbaux} />
          <Route path="/audiences" component={Audiences} />
          <Route path="/etat-civil" component={EtatCivil} />
          <Route path="/services-municipaux" component={ServicesMunicipaux} />
          <Route path="/socio-culturels" component={SocioCulturelles} />
          <Route path="/commissions" component={Commissions} />
          <Route path="/police-municipale" component={PoliceMunicipale} />
          <Route path="/partenariat" component={Partenariat} />
          <Route path="/services-techniques" component={ServicesTechniques} />
          <Route path="/municipalite" component={Municipalite} />
          <Route path="/conseil-municipal" component={ConseilMunicipal} />
          <Route path="/contact" component={Contact} />
          <Route path="/maire" component={Maire} />
          <Route path="/decouvrir-aboisso" component={DecouvrirVille} />
          <Route path="/projets" component={Projets} />
          <Route path="/a-la-une" component={InfosPage} />
          <Route path="/adresses-utiles" component={AdressesUtiles} />
          <Route path="/presentation" component={Presentation} />
          <Route path="/jumellage" component={Jumellage} />
          <Route path="/demande-autorisation" component={Autorisation} />
          <Route component={ErrorPage404} />
        </Switch>
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
