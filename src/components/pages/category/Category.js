import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryGrid from "../home/CategoryGrid";
import NotFound from "../error-pages/NotFound";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

let apiUrl = process.env.REACT_APP_API_URL;

const stylesTwo = {
  maxHeight: "200px",
  maxWidth: "350px",
};

let cateroryList = [
  {
    id: 1,
    name: "iphone 12",
    img_url:
      "https://www.profseema.com/wp-content/uploads/2020/11/7-compressed.png",
  },
];

function Category() {
  const [subCat, setSubCat] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  let { category } = useParams();

  let categories = useSelector((state) => state.category.categories);

  // get category id
  let categoryId =
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
            <Grid item xs={1} sx={{ mx: 2, cursor: "pointer" }} key={cat.id}>
              <Box onClick={() => handleClick(cat.id, cat.name)}>
                {/* <Avatar
                  src={cat.img_url.replace(
                    "http://localhost:3000/",
                    process.env.REACT_APP_API
                  )}
                  alt="category"
                  variant="square"
                  sx={{ width: "115px", height: "115px", mx: "auto" }}
                /> */}
                <Typography align="center">{cat.name}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>

      {/* loop all category in categoryGrid */}
      <CategoryGrid
        title="category"
        list={cateroryList}
        styles={stylesTwo}
        showTitle={true}
        gridCol={{ xs: 1, sm: 2, md: 4 }}
        viewAllLink={true}
      />
    </>
  );
}

export default Category;
