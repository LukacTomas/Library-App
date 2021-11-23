import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material/";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const initialState = { name: "", address: "", mobile: "" };


/**
 * 
 * TODO rewrite it to use Formik or react-forms 
 */

export const AddNewActions = ({ open, handleClose, addLib }) => {
  const [fields, setFields] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  const changeInput = (field, { target }) => {
    setFields((fields) => {
      const newFields = { ...fields };
      newFields[field] = target.value;
      return newFields;
    });
  };

  const handleSumbit = () => {
    handleClose();
    addLib(fields);
    setFields(initialState);
  };

  const isCorrectName = useCallback(() => {
    return fields.name.length >= 1 && fields.name.length <= 5;
  }, [fields.name]);

  const isCorrectAddress = useCallback(() => {
    return fields.address.length >= 1 && fields.address.length <= 5;
  }, [fields.address]);
  const isCorrectMobile = useCallback(() => {
    return fields.mobile.length >= 1 && fields.mobile.length <= 8;
  }, [fields.mobile]);

  useEffect(() => {
    if (fields.name.length > 3 && fields.address.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fields]);

  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
      <DialogTitle>Add New Library</DialogTitle>
      <DialogContent>
        <DialogContentText>Provide Library name and address.</DialogContentText>
        <TextField
          label="Library name"
          fullWidth
          error={isCorrectName()}
          helperText={
            fields.name.length === 0
              ? "Provide Name"
              : !isCorrectName()
              ? "Correct name"
              : "Name must be greater than 5 characters"
          }
          variant="standard"
          required
          autoFocus
          value={fields.name}
          onChange={(event) => changeInput("name", event)}
          sx={{ my: "1em" }}
        />
        <TextField
          label="Library address"
          fullWidth
          error={isCorrectAddress()}
          helperText={
            fields.address.length === 0
              ? "Provide Adress"
              : !isCorrectAddress()
              ? "Correct Address"
              : "Address must be greater than 5 characters"
          }
          variant="standard"
          value={fields.address}
          onChange={(event) => changeInput("address", event)}
          sx={{ my: "1em" }}
          required
        />
        <TextField
          label="Library Mobile Phone"
          fullWidth
          error={isCorrectMobile()}
          helperText={
            fields.mobile.length === 0
              ? "Provide Mobile Phone"
              : !isCorrectMobile()
              ? "Correct Mobile Phone"
              : "Mobile phone must be greater than 8 characters"
          }
          variant="standard"
          value={fields.mobile}
          onChange={(event) => changeInput("mobile", event)}
          sx={{ my: "1em" }}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSumbit} disabled={disabled}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
