import React, { useEffect} from 'react';
import Menu from '../Menu';
import {CarouselPage} from '../CarouselPage';
import Banniere from '../Banniere';
import Infos from '../Infos';
import Director from '../Director';
import Commune from '../Commune';
import Tourisme from '../Tourisme';
import Map from '../Map';
import FooterPage from '../FooterPage';


function Home() {

  useEffect(() => {

  })
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
export default Home;
