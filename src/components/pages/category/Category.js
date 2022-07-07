import { useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import NotFound from "../error-pages/NotFound";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SubCatProducts from "./SubCatProducts";

const apiUrl = process.env.REACT_APP_API_URL;

function Category () {
  const [subCat, setSubCat] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { category } = useParams();
  const categories = useSelector((state) => state.category.categories);

  // get category id
  const categoryId =
    categories.length > 0 &&
    categories.find((cat) => cat.name.toLowerCase() === category.toLowerCase());

  useEffect(() => {
    fetch(`${apiUrl}/sub_categories?main_category_id=${categoryId.id}`)
      .then((res) => res.json())
      .then((data) => setSubCat(data))
      .catch((err) => setError(err));
  }, [categoryId.id]);

  if (error) {
    return <NotFound />;
  }

  const handleClick = (id, name) => {
    navigate(`/${name}`);
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        {subCat.length > 0 &&
          subCat.map((cat) => (
            <Grid
              item
              xs={1}
              sx={{ mx: 8, my: 4, cursor: "pointer" }}
              key={cat.id}
            >
              <Box onClick={() => handleClick(cat.id, cat.name)}>
                <Button variant="contained" sx={{ px: 4, py: 2 }}>
                  {cat.name}
                </Button>
              </Box>
            </Grid>
          ))}
      </Grid>

      {/* loop all category in categoryGrid */}
      {subCat.length > 0 &&
        subCat.map((cat) => <SubCatProducts subCategory={cat} />)}
    </>
  );
}

export default Category;
