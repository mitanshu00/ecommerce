import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../error-pages/NotFound";
import ProductListLayout from "./ProductListLayout";

let apiUrl = process.env.REACT_APP_API_URL;

function Products() {
  const [filterData, setFilterData] = useState([]);
  const [error, setError] = useState(false);

  let { subcategory } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/products?sub_category=${subcategory}`)
      .then((res) => res.json())
      .then((data) => setFilterData(data.products))
      .catch((err) => setError(err));
  }, [subcategory]);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {/* {filterData.length === 0 && <p>Loading</p>} */}
      {filterData.length > 0 && <ProductListLayout filterData={filterData} />}
    </>
  );
}

export default Products;
