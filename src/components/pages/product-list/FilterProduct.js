/* 
filter based on

 - brand
 - price (if possible with min - max input)
 - rating (with 4* and above)
 - discount

*/

import { useState, useEffect } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

// count all products by discount
const countDiscount = (products) => {
  const discount = {
    "30above": 0,
    "40above": 0,
    "50above": 0,
    "60above": 0,
  };
  products.forEach((product) => {
    if (product.discount >= 30 && product.discount < 40) {
      discount["30above"] += 1;
    } else if (product.discount >= 40 && product.discount < 50) {
      discount["40above"] += 1;
    } else if (product.discount >= 50 && product.discount < 60) {
      discount["50above"] += 1;
    } else if (product.discount >= 60) {
      discount["60above"] += 1;
    }
  });
  return discount;
};

// count all products by rating

const countRating = (products) => {
  const rating = {
    "2above": 0,
    "3above": 0,
    "4above": 0,
  };
  products.forEach((product) => {
    if (product.rating >= 2 && product.rating < 3) {
      rating["2above"] += 1;
    }
    if (product.rating >= 3 && product.rating < 4) {
      rating["3above"] += 1;
    }
    if (product.rating >= 4) {
      rating["4above"] += 1;
    }
  });
  return rating;
};

function FilterProduct({ products }) {
  const [discount, setDiscount] = useState({
    "30above": 0,
    "40above": 0,
    "50above": 0,
    "60above": 0,
  });

  const [rating, setRating] = useState({
    "2above": 0,
    "3above": 0,
    "4above": 0,
  });

  useEffect(() => {
    setDiscount(countDiscount(products));
    setRating(countRating(products));
  }, [products]);

  console.log(discount, rating);

  let brandList = new Set();

  // get all brands from products
  products.forEach((product) => {
    brandList.add(product.brand);
  });

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Filter
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Brand</Typography>
        <Divider />

        <ul style={{ listStyle: "none", padding: 0 }}>
          {Array.from(brandList).map((brand) => (
            <li key={brand}>
              <input type="checkbox" id={brand} />
              <label htmlFor={brand}>{brand}</label>
            </li>
          ))}
        </ul>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Price</Typography>
        <Divider />
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <input type="number" placeholder="min" style={{ maxWidth: "50px" }} />
          <Typography variant="body2">-</Typography>
          <input type="number" placeholder="max" style={{ maxWidth: "50px" }} />
        </Stack>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Rating</Typography>
        <Divider />
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <input type="checkbox" id="2above" />
            <label htmlFor="2above">2 and above - {rating["2above"]}</label>
          </li>
          <li>
            <input type="checkbox" id="3above" />
            <label htmlFor="3above">3 and above - {rating["3above"]}</label>
          </li>
          <li>
            <input type="checkbox" id="4above" />
            <label htmlFor="4above">4 and above - {rating["4above"]}</label>
          </li>
        </ul>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Discount</Typography>
        <Divider />
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <input type="checkbox" id="30above" />
            <label htmlFor="30above">30 - 40 - {discount["30above"]}</label>
          </li>
          <li>
            <input type="checkbox" id="40above" />
            <label htmlFor="40above">40 - 50 - {discount["40above"]}</label>
          </li>
          <li>
            <input type="checkbox" id="50above" />
            <label htmlFor="50above">50 - 60 - {discount["50above"]}</label>
          </li>
          <li>
            <input type="checkbox" id="60above" />
            <label htmlFor="60above">
              60 and above - {discount["60above"]}
            </label>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default FilterProduct;
