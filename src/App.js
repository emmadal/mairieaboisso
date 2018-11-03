import React from 'react';
import Menu from './components/Menu';
import {CarouselPage} from './components/CarouselPage';
import Banniere from './components/Banniere';
import Infos from './components/Infos';
import Director from './components/Director';
import Commune from './components/Commune';
import Tourisme from './components/Tourisme';
import Map from './components/Map';
import FooterPage from './components/FooterPage';

function App() {
  return(
    <div>
      <Director/>
      <Banniere />
      <Menu />
      <CarouselPage />
      <Infos />
      <Commune />
      <Tourisme />
      <Map />
      <FooterPage />
    </div>
  )
}
export default App;
