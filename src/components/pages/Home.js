import React, { useEffect } from "react"
import { CarouselPage } from "../CarouselPage"
import Infos from "../Infos"
import Director from "../Director"
import Commune from "../Commune"
import Tourisme from "../Tourisme"
import Map from "../Map"

export default function Home() {
  useEffect(() => {})

  return (
    <div>
      <Director />
      <CarouselPage />
      <Infos />
      <Commune />
      <Tourisme />
      <Map />
    </div>
  )
}
