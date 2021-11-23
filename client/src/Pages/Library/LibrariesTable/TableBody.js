import React from "react";
import { DeleteForever, CheckCircleOutline } from "@mui/icons-material/";
import { IconButton } from "@mui/material";

import { StyledTableRow, StyledTableCell } from "./StyledTable";

export const TableBody = ({ data, selectRow, deleteRow }) => {
  return data.map((row) => (
    <StyledTableRow key={row._id}>
      <StyledTableCell component="th" scope="row">
        {row.name}
      </StyledTableCell>
      <StyledTableCell>
        <IconButton color="primary" onClick={() => selectRow(row._id)}>
          <CheckCircleOutline />
        </IconButton>
      </StyledTableCell>
      <StyledTableCell>
        <IconButton color="error" onClick={() => deleteRow(row._id)}>
          <DeleteForever />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  ));
};
