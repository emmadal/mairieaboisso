import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export const Rois = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled >
      <img src="" onDragStart={handleOnDragStart} className="yours-custom-class" alt="" />
      <img src="" onDragStart={handleOnDragStart} className="yours-custom-class" alt="" />
      <img src="" onDragStart={handleOnDragStart} className="yours-custom-class" alt="" />
      <img src="" onDragStart={handleOnDragStart} className="yours-custom-class" alt="" />
      <img src="" onDragStart={handleOnDragStart} className="yours-custom-class" alt="" />
    </AliceCarousel>
  )
}
