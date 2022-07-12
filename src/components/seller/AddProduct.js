import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "../ReusableComponents/Input";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RButton from "../ReusableComponents/Button";
import RSelect from "../ReusableComponents/RSelect";
import { useSelector } from "react-redux";
import UploadImage from "./UploadImage";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 4,
  p: 4,
};

export default function AddProdut({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    images: [],
    category: "",
    brand: "",
    subcategory: "",
    quantity: "",
  });

  const [subCat, setSubCat] = useState([]);

  const categories = useSelector((state) => state.category.categories);
  const subcategories = useSelector((state) => state.subcategory.subcategories);
  const brands = useSelector((state) => state.brand.brands);
  const sellerId = useSelector((state) => state.auth.sellerId);

  useEffect(() => {
    setSubCat(subcategories);
  }, [subcategories]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (selectedOption) => {
    setForm({ ...form, category: selectedOption.id });
    // filter subcategories by category
    const newsubcategories = subcategories.filter(
      (subcategory) => subcategory.main_category_id === selectedOption.id
    );
    setSubCat(newsubcategories);
  };

  const handleSubCatChange = (selectedOption) => {
    setForm({ ...form, subcategory: selectedOption.id });
  };

  const handleBrandChange = (selectedOption) => {
    setForm({ ...form, brand: selectedOption.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        price: form.price,
        description: form.description,
        sub_category_id: form.subcategory,
        brand_id: form.brand,
        seller_id: sellerId,
        posters: [...form.images],
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            align="center"
            sx={{ mb: 4 }}
          >
            Add new product
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} justifyContent="center">
              <Input
                name="name"
                label="product name"
                variant="outlined"
                value={form.name}
                onChange={(e) => handleChange(e)}
                required
              />
              <Input
                name="description"
                label="description"
                variant="outlined"
                value={form.description}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="price"
                label="price"
                variant="outlined"
                value={form.price}
                onChange={(e) => handleChange(e)}
              />

              <Input
                name="quantity"
                type="number"
                label="quantity no."
                variant="outlined"
                value={form.quantity}
                onChange={(e) => handleChange(e)}
              />

              <RSelect
                options={brands}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={handleBrandChange}
                isSearchable={true}
                placeholder="select brand"
                name="brand"
              />

              <RSelect
                options={categories}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={handleCategoryChange}
                isSearchable={true}
                placeholder="select category"
                name="category"
                // value={form.category}
              />

              <RSelect
                options={subCat}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={handleSubCatChange}
                isSearchable={true}
                placeholder="select sub-category"
                name="subcategory"
                // value={form.category}

                isDisabled={Boolean(!form.category)}
              />

              <UploadImage files={form} setFiles={setForm} />

              <RButton variant="contained" color="primary" type="submit">
                Add product
              </RButton>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

AddProdut.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
