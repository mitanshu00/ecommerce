import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import BannerCarousel from "./BannerCarousel";
import CategoryGrid from "./CategoryGrid";
import ProductCarousel from "./ProductCarousel";
import { useSelector } from "react-redux";

const responsiveStyle = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  borderRadius: "50%",
  maxHeight: "200px",
  maxWidth: "200px",
};

let apiUrl = process.env.REACT_APP_API_URL;

const Home = () => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [highestDiscProd, setHighestDiscProd] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/discounts`)
      .then((res) => res.json())
      .then((data) => setDiscountedProducts(data))
      .catch((err) => console.log(err));

    fetch(`${apiUrl}/discount_items/?offer_type=direct`)
      .then((res) => res.json())
      .then((data) => setHighestDiscProd(data))
      .catch((err) => console.log(err));
  }, []);

  let categories = [];
  categories = useSelector((state) => state.category.categories);

  return (
    <>
      <Box>
        {/* {discountedProducts.length > 0 && (
          <BannerCarousel discountedProducts={discountedProducts} />
        )} */}
        {highestDiscProd.length > 0 && (
          <ProductCarousel
            title="Discounted products"
            data={highestDiscProd}
            timer={true}
          />
        )}
        {categories.length > 0 && (
          <CategoryGrid
            title="Categories"
            list={categories}
            styles={styles}
            showTitle={true}
          />
        )}

        {/* <ProductCarousel
          data={productst}
          timer={false}
          title="Popular Brands"
          responsive={responsiveStyle}
        /> */}
      </Box>
    </>
  );
};

export default Home;
