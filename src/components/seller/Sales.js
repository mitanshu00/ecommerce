import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { columns as columnList } from "./ManageOrder";

const columns = [
  ...columnList,
  {
    field: "created_at",
    headerName: "created at",
    width: 250
  },
  {
    field: "discount",
    headerName: "discount",
    type: "number",
    width: 120,
    renderCell: (params) => <p>{params.row.product.discount}</p>
  }
];

export default function Stocks () {
  const [rows, setRow] = useState([]);

  const sellerId = useSelector((state) => state.auth.sellerId);
  const token = useSelector((state) => state.auth.user.token);

  // let sellerId = 1;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/order_items/?seller_id=${sellerId}`,
      {
        headers: { authorization: `Bearer ${token}` }
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
        checkboxSelection
        autoHeight={true}
      />
    </div>
  );
}
