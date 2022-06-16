import React from "react";
import Carousel from "react-material-ui-carousel";

function BannerCarousel({ title }) {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 50,
        },
      }}
    >
      <img
        src="assets/1.jpg"
        alt=""
        style={{ width: "100%", height: "300px" }}
      />
      <img
        src="assets/1.jpg"
        alt=""
        style={{ width: "100%", height: "300px" }}
      />
      <img
        src="assets/1.jpg"
        alt=""
        style={{ width: "100%", height: "300px" }}
      />

      <img
        src="assets/1.jpg"
        alt=""
        style={{ width: "100%", height: "300px" }}
      />
    </Carousel>
  );
}

export default BannerCarousel;
