import { Box, Typography, Button, Divider } from "@mui/material/";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import CountdownTimer from "./sub-component/CountdownTimer";

const responsiveStyle = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductCarousel = ({
  data,
  timer,
  title,
  responsive = responsiveStyle,
}) => {
  return (
    <Box sx={{ marginTop: 12, background: "#FFFFFF" }}>
      <Box sx={{ display: "flex", padding: "5px 10px" }}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: "32px",
            marginRight: 2,
          }}
        >
          {title}
        </Typography>
        {timer && <CountdownTimer />}
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginLeft: "auto",
            backgroundColor: "#2874f0",
            borderRadius: 2,
            fontSize: 13,
          }}
        >
          View All
        </Button>
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
        {data.map((temp) => (
          <Link
            to={`product/${temp.id}`}
            style={{ textDecoration: "none" }}
            key={temp.id}
          >
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <img
                src={temp.url}
                sx={{ width: "100%", maxHeight: 150 }}
                alt=""
              />
              <Typography
                style={{
                  fontWeight: 600,
                  color: "#212121",
                  fontSize: 14,
                  marginTop: 5,
                }}
              >
                {temp.title.shortTitle}
              </Typography>
              <Typography style={{ color: "green" }}>
                {temp.discount}
              </Typography>
              <Typography style={{ color: "#212121", opacity: ".6" }}>
                {temp.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

// const Slide = () => {
//   return <MultiSlide />;
// };

export default ProductCarousel;
