import React from "react";
import { Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const AddNewButton = React.memo(({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Pass props down to children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { open, handleClose });
    }
    return child;
  });

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddCircleOutlineIcon />
        <Typography variant="inherit">&nbsp;Add new Library</Typography>
      </Button>
      {childrenWithProps}
    </>
  );
});
