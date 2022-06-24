import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Rating,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";

let apiUrl = process.env.REACT_APP_API_URL;

function RatingReviews() {
  const [ratings, setRatings] = useState([]);
  const token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    fetch(`${apiUrl}/reviews`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setRatings(data);
      });
  }, [token]);

  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {ratings.length === 0 && <p>no reviews available.</p>}
      {ratings.length > 0 &&
        ratings.map((rating, index) => (
          <ListItem sx={{ mb: 2, boxShadow: 2 }} key={index + rating.id}>
            <Stack spacing={2}>
              <Stack direction="row">
                <ListItemAvatar>
                  <Avatar
                    alt="img"
                    variant="square"
                    src={rating.product?.poster_urls[0]}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={rating.product?.name}
                  secondary="order date"
                />
              </Stack>
              <Rating value={rating.rating} readOnly />
              <ListItemText
                primary={rating.review_header}
                secondary={rating.review_content}
              />
            </Stack>
          </ListItem>
        ))}
    </List>
  );
}

export default RatingReviews;
