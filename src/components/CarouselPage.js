import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import "./styles/carousel.css";
import { carousel } from "./containers/carousel";

export const CarouselPage = () => {
  return (
    <MDBContainer fluid className="p-0">
      <h4 className="mt-4 mb-2"> </h4>
      <MDBCarousel
        thumbnails
        activeItem={1}
        length={carousel.length}
        showControls={true}
        showIndicators
        className="z-depth-1"
      >
        {carousel.map((i, key) => (
          <MDBCarouselInner key={key}>
            <MDBCarouselItem itemId={i.id}>
              <MDBView>
                <img
                  className=" carouselImg"
                  src={i.img}
                  alt="carousel"
                />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className="h1-responsive font-weight-bold mb-5">
                  {i.caption}
                </h1>
                <h3 className="h3-responsive"> </h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        ))}
      </MDBCarousel>
    </MDBContainer>
  );
};
