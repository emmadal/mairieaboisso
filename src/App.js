import React from 'react';
import Menu from './components/Menu';
import {CarouselPage} from './components/CarouselPage';
import Banniere from './components/Banniere';

function App() {
  return(
    <div>
      <Banniere />
      <Menu />
      <CarouselPage />
    </div>
  )
}
export default App;
