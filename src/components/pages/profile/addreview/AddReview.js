import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Input from "../../../ReusableComponents/Input";
import RButton from "../../../ReusableComponents/Button";

export default function AddReview({ product_id, user_id }) {
  const [value, setValue] = useState(0);
  const [review, setReview] = useState("");
  const [reviewHeader, setReviewHeader] = useState("");

  const token = useSelector((state) => state.auth.user.token);

  const reviewChangeHandle = (e) => {
    setReview(e.target.value);
  };

  const reviewHeaderHandler = (e) => {
    setReviewHeader(e.target.value);
  };

  const handleSubmit = async () => {
    if (value === 0 || review.length < 10 || reviewHeader.length < 15) return;

    const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id,
        user_id,
        rating: value,
        review_header: reviewHeader,
        review_content: review,
      }),
    });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <Input
        label="Outlined"
        variant="outlined"
        value={reviewHeader}
        onChange={reviewHeaderHandler}
        placeholder="Review header. (minimun 10 characters)"
      />

      <Input
        id="outlined-multiline-static"
        label="Review"
        multiline
        value={review}
        onChange={reviewChangeHandle}
        placeholder="Write your review here... (minimun 15 characters)"
      />

      <RButton variant="contained" onClick={handleSubmit}>
        Submit Review
      </RButton>
    </Box>
  );
}

AddReview.propTypes = {
  product_id: PropTypes.number,
  user_id: PropTypes.number,
};
