import { Button, Grid } from "@mui/material";
import React from "react";

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
      <Button onClick={() => handleSort("popularity")}>Popularity</Button>
      <Button onClick={() => handleSort("new")}>New Products</Button>
      <Button onClick={() => handleSort("high")}>Price: High to Low</Button>
      <Button onClick={() => handleSort("low")}>price: low to high</Button>
      <Button onClick={() => handleSort("rating")}>Customer rating</Button>
      <Button onClick={() => handleSort("discount")}>Highest discount</Button>
    </Grid>
  );
}

export default SortProduct;
