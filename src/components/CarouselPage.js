import React from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import './styles/carousel.css'

export const CarouselPage = () => {
  return(
      <Container>
        <h4 className="mt-4 mb-2"> </h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100 img-fluid" src={require('../components/img/slide.png')} alt="First slide" />
                <Mask overlay=""></Mask>
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive font-weight-bold mb-5">AKWABA ABOISSO</h1>
                <h3 className="h3-responsive"> </h3>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100 img-fluid" src={require('../components/img/slide2.png')} alt="Second slide" />
                <Mask overlay=""></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive"> </h3>
                <p></p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100 img-fluid" src={require('../components/img/slide3.png')}
                  alt="Third slide" />
                  <Mask overlay=""></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
              <img className="d-block w-100 img-fluid" src={require('../components/img/slide4.png')}
                alt="Mattonit's item" />
                <Mask overlay=""></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
