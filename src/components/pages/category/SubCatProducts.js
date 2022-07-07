import { useState, useEffect } from "react";
import ProductGrid from "../home/ProductGrid";

const apiUrl = process.env.REACT_APP_API_URL;

const stylesTwo = {
  maxHeight: "200px",
  maxWidth: "350px"
};

function SubCatProducts ({ subCategory }) {
  const [subCat, setSubCats] = useState([]);
  console.log(
    "🚀 ~ file: SubCatProducts.js ~ line 13 ~ SubCatProducts ~ subCat",
    subCat
  );

  useEffect(() => {
    fetch(`${apiUrl}/products?sub_category_id=${subCategory.id}`)
      .then((res) => res.json())
      .then((data) => setSubCats(data))
      .catch((err) => console.log(err));
  }, [subCategory]);

  return (
    <>
      {subCat.length > 0 && (
        <ProductGrid
          title={subCategory.name}
          list={subCat.slice(0, 6)}
          styles={stylesTwo}
          showTitle={true}
          gridCol={{ xs: 1, sm: 2, md: 4 }}
          viewAllLink={true}
        />
      )}
    </>
  );
}

export default SubCatProducts;
