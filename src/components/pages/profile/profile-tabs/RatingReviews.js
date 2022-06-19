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

let apiUrl = process.env.REACT_APP_API_URL;

function RatingReviews() {
  const [ratings, setRatings] = useState([{}]);

  useEffect(() => {
    fetch(`${apiUrl}/reviews/?user_id=12`)
      .then((res) => res.json())
      .then((data) => {
        setRatings(data);
      });
  }, []);

  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {ratings.length > 0 &&
        ratings.map((rating, index) => (
          <ListItem sx={{ mb: 2, boxShadow: 2 }} key={index + rating.id}>
            <Stack spacing={2}>
              <Stack direction="row">
                <ListItemAvatar>
                  <Avatar
                    alt="img"
                    variant="square"
                    src={rating.product?.poster_urls[0].replace(
                      "http://localhost:3000/",
                      "https://aacd-43-250-165-38.in.ngrok.io/"
                    )}
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
