import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

export const Rois = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled autoPlay={true} autoPlayInterval={2000}>
      <img
        src={require("./img/rois1.png")}
        onDragStart={handleOnDragStart}
        className="img-fluid rounded"
        alt=""
      />
      <img
        src={require("./img/rois2.png")}
        onDragStart={handleOnDragStart}
        className="img-fluid rounded"
        alt=""
      />
      <img
        src={require("./img/rois3.png")}
        onDragStart={handleOnDragStart}
        className="img-fluid rounded"
        alt=""
      />
      <img
        src={require("./img/rois.png")}
        onDragStart={handleOnDragStart}
        className="img-fluid rounded"
        alt=""
      />
    </AliceCarousel>
  )
}
