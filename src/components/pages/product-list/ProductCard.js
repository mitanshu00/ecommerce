import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Carousel from "react-material-ui-carousel";

export default function ActionAreaCard({ product }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <Carousel
          autoPlay={false}
          animation="slide"
          indicators={false}
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
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            style={{ maxWidth: "100%", maxWeight: "100%" }}
          />
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            style={{ maxWidth: "100%", maxWeight: "100%" }}
          />
        </Carousel>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <del>Rs. {product.price}</del>
          <Typography>{`Rs. ${product.price} (${product.discount}%)`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
