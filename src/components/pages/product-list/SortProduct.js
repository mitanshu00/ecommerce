/*
 - price
 - rating
 - newest
*/

import { Button, Grid } from "@mui/material";
import React from "react";

function SortProduct() {
  return (
    <Grid sx={{ mb: 4 }}>
      <Button>Popularity</Button>
      <Button>New Products</Button>
      <Button>Price: High to Low</Button>
      <Button>price: low to high</Button>
      <Button>Customer rating</Button>
      <Button>Highest discount</Button>
    </Grid>
  );
}

export default SortProduct;

// import React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function SortProduct() {
//   const [sort, setSort] = React.useState("");

//   const handleChange = (event) => {
//     setSort(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={sort}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={1}>New Products</MenuItem>
//           <MenuItem value={2}>Price: High to Low</MenuItem>
//           <MenuItem value={3}>price: low to high</MenuItem>
//           <MenuItem value={2}>rating: High to Low</MenuItem>
//           <MenuItem value={4}>rating: low to high</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
