import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, Stack } from "@mui/material";

export default function ProductImg({ images }) {
  const [imgIndex, setImgIndex] = useState(0);

  const changeImg = (index) => {
    setImgIndex(index);
  };

  return (
    <Box
      sx={{
        maxWidth: "700px",
        margin: "auto",
        px: 2,
        position: "sticky",
        top: 0,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2} columns={{ xs: 1 }}>
          <Stack spacing={2} direction="column">
            {images &&
              images.map((image, index) => (
                <img
                  src={image}
                  height="70px"
                  width="70px"
                  alt="product"
                  className="side-images"
                  key={index}
                  onClick={() => changeImg(index)}
                />
              ))}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={10} columns={{ xs: 1 }}>
          <Carousel
            autoPlay={false}
            animation="slide"
            indicators={true}
            navButtonsAlwaysVisible={false}
            cycleNavigation={true}
            StylesProvider
            index={imgIndex}
            navButtonsProps={{
              style: {
                color: "#494949",
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                margin: 0,
                width: 50,
              },
            }}
          >
            {images &&
              images.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  style={{
                    height: "700px",
                    maxWidth: "100%",
                  }}
                  key={index}
                />
              ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}
