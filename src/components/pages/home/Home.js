import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import BannerCarousel from "./BannerCarousel";
import CategoryGrid from "./CategoryGrid";
import ProductCarousel from "./ProductCarousel";
import { products, productst } from "../../../data/ProductList";
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

  useEffect(() => {
    fetch(`${apiUrl}/discounts`)
      .then((res) => res.json())
      .then((data) => setDiscountedProducts(data))
      .catch((err) => console.log(err));
  }, []);

  let categories = [];
  categories = useSelector((state) => state.category.categories);

  return (
    <>
      <Box>
        {discountedProducts.length > 0 && (
          <BannerCarousel discountedProducts={discountedProducts} />
        )}
        <ProductCarousel
          title="Discounted products"
          data={products}
          timer={true}
        />
        {categories.length > 0 && (
          <CategoryGrid
            title="Categories"
            list={categories}
            styles={styles}
            showTitle={true}
            gridCol={{ xs: 2, sm: 3, md: 3, lg: 6 }}
          />
        )}

        <ProductCarousel
          data={productst}
          timer={false}
          title="Popular Brands"
          responsive={responsiveStyle}
        />
      </Box>
    </>
  );
};

export default Home;
