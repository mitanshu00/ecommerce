import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import RSelect from "../ReusableComponents/RSelect";

const options = [
  { value: "pending", label: "Created" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
  { value: "returned", label: "Returned" },
];

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "order_id",
    headerName: "Order id",
    width: 100,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Product name",
    width: 250,
    renderCell: (params) => <p>{params.row.product.name}</p>,
  },
  {
    field: "quantity",
    headerName: "quantity",
    width: 100,
    sortable: false,
  },

  {
    field: "price",
    headerName: "price",
    type: "number",
    width: 120,
    renderCell: (params) => <p>{params.row.product.price}</p>,
  },

  {
    field: "status",
    headerName: "status",
    width: 120,
    renderCell: (params) => (
      <RSelect options={options} name="status" id="status" />
    ),
  },
];

export default function Stocks() {
  const [rows, setRow] = useState([]);

  const sellerId = useSelector((state) => state.auth.sellerId);
  const token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/order_items/?seller_id=${sellerId}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRow(data);
      });
  }, [sellerId, token]);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30, 50]}
        autoHeight={true}
      />
    </div>
  );
}
