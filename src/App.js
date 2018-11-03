import React from 'react';
import Menu from './components/Menu';
import {CarouselPage} from './components/CarouselPage';
import Banniere from './components/Banniere';
import Infos from './components/Infos';
import Director from './components/Director';
import Commune from './components/Commune';

function App() {
  return(
    <div>
      <Director/>
      <Banniere />
      <Menu />
      <CarouselPage />
      <Infos />
      <Commune />
    </div>
  )
}
export default App;
