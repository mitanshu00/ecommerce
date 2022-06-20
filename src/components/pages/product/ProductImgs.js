import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

export default function ProductImg({ images }) {
  let newimages = images.map((image) => {
    return image.replace(
      "http://localhost:3000/",
      "https://384e-103-240-35-190.in.ngrok.io/"
    );
  });

  return (
    <Box sx={{ maxWidth: "550px", margin: "auto", px: 2 }}>
      <Carousel
        autoPlay={false}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
        StylesProvider
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
        {newimages &&
          newimages.map((image, index) => (
            <img
              // src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
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
    </Box>
  );
}
