import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Dashboard() {
  return (
    <>
      <Stack spacing={3} direction="row" justifyContent="space-evenly">
        <Box sx={{ p: 3, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Sales : $29,999
          </Typography>
        </Box>
        <Box sx={{ p: 3, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Orders: 391
          </Typography>
        </Box>
        <Box sx={{ p: 3, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Revenue: $29,999
          </Typography>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order id</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>product</TableCell>
              <TableCell>quantity</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
