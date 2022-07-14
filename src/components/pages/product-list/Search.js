import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../error-pages/NotFound";
import ProductListLayout from "./ProductListLayout";

const apiUrl = process.env.REACT_APP_API_URL;

function Search() {
  const [filterData, setFilterData] = useState([]);
  const [error, setError] = useState(false);

  const { query } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/search?search=${query}`)
      .then((res) => res.json())
      .then((data) => setFilterData(data))
      .catch((err) => setError(err));
  }, [query]);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {filterData.length === 0 ? (
        <p>Loading</p>
      ) : (
        <ProductListLayout filterData={filterData} />
      )}
    </>
  );
}

export default Search;
