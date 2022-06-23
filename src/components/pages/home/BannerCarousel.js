import React from "react";
import Carousel from "react-material-ui-carousel";

function BannerCarousel({ discountedProducts }) {
  console.log("🚀 ~ file: BannerCarousel.js ~ line 5 ~ BannerCarousel ~ discountedProducts", discountedProducts)
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
      {discountedProducts.map((product) => (
        <img
          src={product.slider_url.replace(
            "http://localhost:3000/",
            process.env.REACT_APP_API
          )}
          alt=""
          style={{ width: "100%", height: "300px" }}
          key={product.id}
        />
      ))}
    </Carousel>
  );
}

export default BannerCarousel;
