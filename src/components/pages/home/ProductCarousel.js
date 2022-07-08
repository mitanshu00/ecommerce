import { Box, Typography, Divider } from "@mui/material/";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const responsiveStyle = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductCarousel = ({ data, title, responsive }) => (
  <Box sx={{ marginTop: 12, background: "#FFFFFF" }}>
    <Box sx={{ display: "flex", padding: "5px 10px" }}>
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 600,
          lineHeight: "32px",
          marginRight: 2
        }}
      >
        {title}
      </Typography>
    </Box>
    <Divider />
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      centerMode={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      showDots={false}
    >
      {data.map((product) => (
        <Link
          to={`product/${product.product_id}`}
          style={{ textDecoration: "none" }}
          key={product.id}
        >
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            {product?.product?.poster_urls[0] && (
              <img
                src={product.product.poster_urls[0]}
                width="100px"
                height="100px"
                sx={{ width: "100%", maxHeight: 150 }}
                alt=""
              />
            )}
            <Typography
              style={{
                fontWeight: 600,
                color: "#212121",
                fontSize: 14,
                marginTop: 5
              }}
            >
              {product.product.name}
            </Typography>
            <Typography style={{ color: "green" }}>
              Rs.{product.product.price} (
              {product.product.discount.offer_dicount}%)
            </Typography>
            <Typography style={{ color: "#212121", opacity: ".6" }}>
              {product.product.description.slice(0, 15)}
            </Typography>
          </Box>
        </Link>
      ))}
    </Carousel>
  </Box>
);

ProductCarousel.defaultProps = {
  responsive: responsiveStyle
};

ProductCarousel.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  responsive: PropTypes.object
};

export default ProductCarousel;
