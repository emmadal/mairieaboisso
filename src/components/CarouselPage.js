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

export const CarouselPage = () => {
  return (
    <Container>
      <h4 className="mt-4 mb-2"> </h4>
      <Carousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src={require("../components/img/slide.png")}
                alt="First slide"
              />
            </View>
            <CarouselCaption>
              <h1 className="h1-responsive font-weight-bold mb-5">
                AKWABA ABOISSO
              </h1>
              <h3 className="h3-responsive"> </h3>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src={require("../components/img/slide44.png")}
                alt="Second slide"
              />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive"> </h3>
              <p />
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src={require("../components/img/slide34.png")}
                alt="Third slide"
              />
            </View>
            <CarouselCaption>
              <h1 className="h1-responsive font-weight-bold mb-5">
                AKWABA ABOISSO
              </h1>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src={require("../components/img/slide2.png")}
                alt="Mattonit's item"
              />
            </View>
            <CarouselCaption />
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    </Container>
  );
};
