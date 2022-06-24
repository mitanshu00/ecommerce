import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

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
    renderCell: (params) => {
      return <p>{params.row.product.name}</p>;
    },
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
    renderCell: (params) => {
      return <p>{params.row.product.price}</p>;
    },
  },

  {
    field: "status",
    headerName: "status",
    width: 120,
    renderCell: (params) => {
      return (
        <select name="status" id="status">
          <option value="pending">created</option>
          <option value="delivered">delivered</option>
          <option value="cancelled">cancelled</option>
          <option value="returned">returned</option>
        </select>
      );
    },
  },
];

export default function Stocks() {
  const [rows, setRow] = useState([]);

  let sellerId = useSelector((state) => state.auth.sellerId);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/order_items/?seller_id=${sellerId}`)
      .then((res) => res.json())
      .then((data) => {
        setRow(data);
      });
  }, [sellerId]);

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
