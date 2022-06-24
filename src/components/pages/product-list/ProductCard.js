import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { WhishlistActions } from "../../../store/slice/whishlist-slice";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ActionAreaCard({ product, whishlisted }) {
  const navigate = useNavigate();
  const handleProductCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const dispatch = useDispatch();

  const addToWishlistHandler = () => {
    dispatch(
      WhishlistActions.addItemToWishlist({
        id: product.id,
        price: product.price,
        name: product.name,
        img_url: product.poster_urls[0],
        description: product.description,
      })
    );
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
        onClick={addToWishlistHandler}
      >
        {whishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
            <Stack direction="row" justifyContent="space-between">
              <Box>{product.name}</Box>
              {product.average_rating && (
                <Typography sx={{ pt: 1 }}>
                  {product.average_rating} ★
                </Typography>
              )}
            </Stack>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.slice(0, 50)}
          </Typography>
          <del>Rs. {product.price}</del>
          <Typography
            sx={{ color: "darkgreen" }}
          >{`Rs. ${product.price} (${product.discount}%)`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
