import React from "react";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";

function BannerCarousel({ discountedProducts }) {
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
          src={product.poster_url}
          alt=""
          style={{ width: "100%", height: "480px" }}
          key={product.id}
        />
      ))}
    </Carousel>
  );
}

BannerCarousel.propTypes = {
  discountedProducts: PropTypes.arrayOf(PropTypes.object),
};

export default BannerCarousel;
