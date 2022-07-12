import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import RButton from "../../ReusableComponents/Button";

function SortProduct({ setFilterData }) {
  const handleSort = (selectedOption) => {
    selectedOption === "low" &&
      setFilterData((prev) => [...prev.sort((a, b) => a.price - b.price)]);
    selectedOption === "high" &&
      setFilterData((prev) => [...prev.sort((a, b) => b.price - a.price)]);
    selectedOption === "new" &&
      setFilterData((prev) => [...prev.sort((a, b) => b.id - a.id)]);
    selectedOption === "name" &&
      setFilterData((prev) => [
        ...prev.sort((a, b) => a.name.localeCompare(b.name)),
      ]);
  };

  return (
    <Grid sx={{ mb: 4 }}>
      <RButton onClick={() => handleSort("popularity")}>Popularity</RButton>
      <RButton onClick={() => handleSort("new")}>New Products</RButton>
      <RButton onClick={() => handleSort("high")}>Price: High to Low</RButton>
      <RButton onClick={() => handleSort("low")}>price: low to high</RButton>
      <RButton onClick={() => handleSort("rating")}>Customer rating</RButton>
      <RButton onClick={() => handleSort("discount")}>Highest discount</RButton>
    </Grid>
  );
}

SortProduct.propTypes = {
  setFilterData: PropTypes.func,
};

export default SortProduct;
