import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";
import { tableCellClasses } from "@mui/material/TableCell";

import { TableBody as Body } from "./TableBody";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Libraries = ({ data, selectRow, deleteRow }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Table">
        <TableHead>
          <TableRow>
            <StyledTableCell>LIBRARY</StyledTableCell>
            <StyledTableCell>SELECT</StyledTableCell>
            <StyledTableCell>DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Body data={data} selectRow={selectRow} deleteRow={deleteRow} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
