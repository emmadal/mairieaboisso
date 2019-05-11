import React from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Container
} from "mdbreact";
import "./styles/carousel.css";
import { carousel } from "./containers/carousel";

export const CarouselPage = () => {
  return (
    <Container>
      <h4 className="mt-4 mb-2"> </h4>
      <Carousel
        activeItem={1}
        length={carousel.length}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        {carousel.map((i, key) => (
          <CarouselInner key={key}>
            <CarouselItem itemId={i.id}>
              <View>
                <img
                  className="d-block w-100 img-fluid"
                  src={i.img}
                  alt="carousel"
                />
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive font-weight-bold mb-5">
                  {i.caption}
                </h1>
                <h3 className="h3-responsive"> </h3>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        ))}
      </Carousel>
    </Container>
  );
};
