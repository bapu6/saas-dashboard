import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ThemeContext } from "../context/ThemeContext";

function createData(
  name: string,
  price: number,
  quantity: number,
  amount: number
) {
  return { name, price, quantity, amount };
}

const rows = [
  createData("ASOS Ridley High Waist", 79.49, 82, 6518.18),
  createData("Marco Lightweight Shirt", 128.5, 37, 4754.5),
  createData("Half Sleeve  Shirt", 39.99, 64, 2559.36),
  createData("Lightweight Jacket", 20.0, 184, 3680.0),
  createData("Marco Shoes", 79.49, 64, 1965.81),
];

const headerData = ["Name", "Price", "Quantity", "Amount"];

export default function BasicTable() {
  const { activeFg } = React.useContext(ThemeContext);
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        color: activeFg,
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerData?.map((item) => (
              <TableCell align="left">
                <p style={{ color: activeFg }}>{item}</p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p style={{ color: activeFg }}>{row.name}</p>
              </TableCell>
              <TableCell align="left">
                <p style={{ color: activeFg }}>{`$${row.price}`}</p>
              </TableCell>
              <TableCell align="left">
                <p style={{ color: activeFg }}>{row.quantity}</p>
              </TableCell>
              <TableCell align="left">
                <p style={{ color: activeFg }}>{`$${row.amount}`}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
