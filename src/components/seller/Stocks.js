import { useState, useEffect, Fragment } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AddProdut from "./AddProduct";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Product name", width: 250 },
  {
    field: "description",
    headerName: "description",
    width: 400,
    sortable: false,
  },
  {
    field: "price",
    headerName: "price",
    type: "number",
    width: 80,
  },
  {
    field: "created_at",
    headerName: "created at",
    description: "This column has a value getter and is not sortable.",
    width: 250,
  },
  {
    field: "poster_urls",
    headerName: "images",
    width: 150,
    renderCell: (params) => (
      <>
        {params.row.poster_urls.map((img, index) => (
          <Fragment key={index}>
            <a href={img} target="_blank">
              {index}
            </a>
            <span>-</span>
          </Fragment>
        ))}
      </>
    ),
  },
];

export default function Stocks() {
  const [rows, setRow] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  // !temp id
  let sellerId = 1;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/sellers/${sellerId}`)
      .then((res) => res.json())
      .then((data) => {
        setRow(data.products);
      });
  }, [sellerId]);

  return (
    <div style={{ width: "100%" }}>
      <AddProdut open={open} setOpen={setOpen} />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Product
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30, 50]}
        checkboxSelection
        autoHeight={true}
      />
    </div>
  );
}
