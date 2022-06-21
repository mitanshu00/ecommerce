import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({ product }) {
  const handleWhishlistClick = (id) => {
    console.log("whishlist clicked", id);
  };

  const navigate = useNavigate();
  const handleProductCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Card sx={{ width: "250px", height: "400px", position: "relative" }}>
      <IconButton
        color="error"
        style={{
          position: "absolute",
          zIndex: 2,
          top: "10px",
          right: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.921)",
          borderRadius: "50%",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={() => handleWhishlistClick(product.id)}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <CardActionArea onClick={() => handleProductCardClick(product.id)}>
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
          {product.poster_urls.map((image, index) => (
            <img
              src={image.replace(
                "http://localhost:3000/",
                process.env.REACT_APP_API
              )}
              alt=""
              width="100%"
              height="275xp"
              key={index}
            />
          ))}
        </Carousel>
        <CardContent sx={{ p: 1 }}>
          <Typography variant="h6" component="div">
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
