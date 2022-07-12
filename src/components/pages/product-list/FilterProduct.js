import { useState, useEffect } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PropTypes from "prop-types";
import RButton from "../../ReusableComponents/Button";

const starStye = { m: "-5px", p: "0px 5px" };

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
    if (product.average_rating >= 2 && product.average_rating < 3) {
      rating["2above"] += 1;
    }
    if (product.average_rating >= 3 && product.average_rating < 4) {
      rating["3above"] += 1;
    }
    if (product.average_rating >= 4) {
      rating["4above"] += 1;
    }
  });
  return rating;
};

function FilterProduct({ products, setFilterData }) {
  const [discount, setDiscount] = useState({
    "30above": 0,
    "40above": 0,
    "50above": 0,
    "60above": 0,
  });

  const [rating, setRating] = useState({
    norating: 0,
    "2above": 0,
    "3above": 0,
    "4above": 0,
  });

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState({
    min: null,
    max: null,
  });

  useEffect(() => {
    setDiscount(countDiscount(products));
    setRating(countRating(products));
  }, [products]);

  const brandList = new Set();

  // get all brands from products
  products.forEach((product) => {
    brandList.add(product.brand.name);
  });

  // filter by selected brand of array
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // filter by selected discount
  const handleDiscountChange = (discount) => {
    setSelectedDiscount(discount);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    // filter by selected brand, rating, price and discount
    const filteredProducts = products.filter((product) => {
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(product.brand.name)) {
          return false;
        }
      }
      if (selectedRating.length > 0) {
        if (!selectedRating.includes(product.rating)) {
          return false;
        }
      }
      if (selectedPrice.min > 0) {
        if (product.price < selectedPrice.min) {
          return false;
        }
      }
      if (selectedPrice.max > 0) {
        if (product.price > selectedPrice.max) {
          return false;
        }
      }
      // check if product discount in greater than selectedDiscount
      if (selectedDiscount) {
        if (!product.discount >= selectedDiscount) {
          return false;
        }
      }

      return true;
    });
    setFilterData(filteredProducts);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Filter
      </Typography>

      <form onSubmit={handleFilterSubmit}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Brand</Typography>
          <Divider />

          <ul style={{ listStyle: "none", padding: 0 }}>
            {Array.from(brandList).map((brand) => (
              <li key={brand}>
                <input
                  type="checkbox"
                  id={brand}
                  onClick={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Price</Typography>
          <Divider />
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <input
              type="number"
              placeholder="min"
              style={{
                maxWidth: "50px",
                padding: "5px",
                borderRadius: "5px",
                borderColor: "lightGray",
              }}
              max={selectedPrice.max && selectedPrice.max}
              onChange={(e) =>
                setSelectedPrice({ ...selectedPrice, min: e.target.value })
              }
            />
            <Typography variant="body2">-</Typography>
            <input
              type="number"
              placeholder="max"
              style={{
                maxWidth: "50px",
                padding: "5px",
                borderRadius: "5px",
                borderColor: "lightGray",
              }}
              min={selectedPrice.min && selectedPrice.min}
              onChange={(e) =>
                setSelectedPrice({ ...selectedPrice, max: e.target.value })
              }
            />
          </Stack>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Rating</Typography>
          <Divider />
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <input
                type="radio"
                id="2above"
                name="filterrating"
                onClick={() => setSelectedRating([2, 3, 4, 5])}
              />
              <label htmlFor="2above">
                <StarIcon color="warning" sx={starStye} />
                <StarIcon color="warning" sx={starStye} />
                {`(${rating["2above"]})`}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="3above"
                name="filterrating"
                onClick={() => setSelectedRating([3, 4, 5])}
              />
              <label htmlFor="3above">
                <StarIcon color="warning" sx={starStye} />
                <StarIcon color="warning" sx={starStye} />
                <StarIcon color="warning" sx={starStye} />
                {`(${rating["3above"]})`}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="4above"
                name="filterrating"
                onClick={() => setSelectedRating([4, 5])}
              />
              <label htmlFor="4above">
                <StarIcon color="warning" sx={starStye} />
                <StarIcon color="warning" sx={starStye} />
                <StarIcon color="warning" sx={starStye} />
                <StarIcon color="warning" sx={starStye} />
                {`(${rating["4above"]})`}
              </label>
            </li>
          </ul>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Discount</Typography>
          <Divider />
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <input
                type="radio"
                name="filterdiscount"
                id="30above"
                onClick={() => handleDiscountChange(30)}
              />
              <label htmlFor="30above">
                30% and above {`(${discount["30above"]})`}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="filterdiscount"
                id="40above"
                onClick={() => handleDiscountChange(40)}
              />
              <label htmlFor="40above">
                40% and above {`(${discount["40above"]})`}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="filterdiscount"
                id="50above"
                onClick={() => handleDiscountChange(50)}
              />
              <label htmlFor="50above">
                50% and above {`(${discount["50above"]})`}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="filterdiscount"
                id="60above"
                onClick={() => handleDiscountChange(60)}
              />
              <label htmlFor="60above">
                60% and above {`(${discount["60above"]})`}
              </label>
            </li>
          </ul>
        </Box>
        <RButton type="submit" variant="contained" color="primary">
          Apply
        </RButton>
      </form>
    </Box>
  );
}

FilterProduct.propTypes = {
  products: PropTypes.array,
  setFilterData: PropTypes.func,
};

export default FilterProduct;
