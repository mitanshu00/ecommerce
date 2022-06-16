import { Box } from "@mui/material";
import BannerCarousel from "./BannerCarousel";
import CategoryGrid from "./CategoryGrid";
import ProductCarousel from "./ProductCarousel";
import { products, productst } from "../../../data/ProductList";
import { CategoryList } from "../../../data/categoryList";
import { PopularList } from "../../../data/categoryList";

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

const stylesTwo = {
  maxHeight: "200px",
  maxWidth: "350px",
};

const Home = () => {
  return (
    <>
      <Box>
        <BannerCarousel />
        <ProductCarousel
          data={products}
          timer={true}
          title="Discounted products"
        />
        <CategoryGrid
          title="Categories"
          list={CategoryList}
          styles={styles}
          showTitle={true}
          gridCol={{ xs: 2, sm: 3, md: 3, lg: 6 }}
        />
        <ProductCarousel
          data={productst}
          timer={false}
          title="Popular Brands"
          responsive={responsiveStyle}
        />
        <CategoryGrid
          title="Popular products"
          list={PopularList}
          styles={stylesTwo}
          showTitle={false}
          gridCol={{ xs: 1, sm: 2, md: 4 }}
        />
      </Box>
    </>
  );
};

export default Home;
