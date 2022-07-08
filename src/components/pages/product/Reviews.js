import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Stack,
  Divider,
  AvatarGroup,
  Avatar,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Button
} from "@mui/material";

const countRating = (products) => {
  const rating = {
    "1above": 0,
    "2above": 0,
    "3above": 0,
    "4above": 0,
    "5above": 0
  };
  products.forEach((product) => {
    if (product.rating >= 1 && product.rating < 2) {
      rating["1above"] += 1;
    }
    if (product.rating >= 2 && product.rating < 3) {
      rating["2above"] += 1;
    }
    if (product.rating >= 3 && product.rating < 4) {
      rating["3above"] += 1;
    }
    if (product.rating >= 4 && product.rating < 5) {
      rating["4above"] += 1;
    }
    if (product.rating === 5) {
      rating["5above"] += 1;
    }
  });
  return rating;
};

const averageRating = (reviews) => {
  let sum = 0;
  reviews.forEach((review) => {
    sum += review.rating;
  });
  return sum / reviews.length;
};

function Reviews({ reviews, avgRating, setAvgRating }) {
  const [rating, setRating] = useState({
    "1above": 0,
    "2above": 0,
    "3above": 0,
    "4above": 0,
    "5above": 0
  });

  useEffect(() => {
    setRating(countRating(reviews));
    setAvgRating(averageRating(reviews));
  }, [reviews, setAvgRating]);

  const reviewsLength = reviews.length;
  return (
    <Box>
      <Stack
        spacing={3}
        direction="row"
        sx={{ my: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Stack>
          <Typography align="center" variant="h5">
            {avgRating} ★
          </Typography>
          <Box>{reviewsLength} Ratings & Reviews</Box>
        </Stack>
        <Box>
          <Stack direction="row">
            5 ★
            <Box sx={{ width: "200px", mt: 1, pl: 1 }}>
              <LinearProgress
                variant="determinate"
                color="success"
                value={(rating["5above"] * 200) / reviewsLength}
              />
            </Box>
          </Stack>
          <Stack direction="row">
            4 ★
            <Box sx={{ width: "200px", mt: 1, pl: 1 }}>
              <LinearProgress
                variant="determinate"
                color="success"
                value={(rating["4above"] * 200) / reviewsLength}
              />
            </Box>
          </Stack>
          <Stack direction="row">
            3 ★
            <Box sx={{ width: "200px", mt: 1, pl: 1 }}>
              <LinearProgress
                variant="determinate"
                color="primary"
                value={(rating["3above"] * 200) / reviewsLength}
              />
            </Box>
          </Stack>
          <Stack direction="row">
            2 ★
            <Box sx={{ width: "200px", mt: 1, pl: 1 }}>
              <LinearProgress
                variant="determinate"
                color="warning"
                value={(rating["2above"] * 200) / reviewsLength}
              />
            </Box>
          </Stack>
          <Stack direction="row">
            1 ★
            <Box sx={{ width: "200px", mt: 1, pl: 1 }}>
              <LinearProgress
                variant="determinate"
                color="error"
                value={(rating["1above"] * 200) / reviewsLength}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={7}>
          {reviews.map((review) =>
            review.image_urls.map((image, index) => (
              <Avatar
                src={image}
                alt=""
                variant="square"
                sx={{ width: "75px", height: "75px" }}
                key={index}
              />
            ))
          )}
        </AvatarGroup>
      </Stack>

      <List>
        {reviews.map((review) => (
          <ListItem sx={{ mb: 2, boxShadow: 2 }} key={review.id}>
            <Stack spacing={2}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color={
                      review.rating >= 4
                        ? "success"
                        : review.rating >= 2
                          ? "warning"
                          : "error"
                    }
                  >
                    {review.rating} ★
                  </Button>
                  <Typography>{review.review_header}</Typography>
                </Stack>
                <ListItemText secondary={review.review_content} />
              </Stack>
              <Stack direction="row" spacing={2}>
                {review.image_urls.map((img, index) => (
                  <Avatar
                    src={img}
                    alt="review-img"
                    variant="square"
                    sx={{ width: "50px", height: "50px" }}
                    key={index}
                  />
                ))}
              </Stack>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
  avgRating: PropTypes.number,
  setAvgRating: PropTypes.number
};

export default Reviews;
