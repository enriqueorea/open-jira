import React, { ChangeEvent, useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField } from "@mui/material";

import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);

  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
  };

  return (
    <>
      {isAddingEntry ? (
        <>
          <TextField
            margin="normal"
            fullWidth
            placeholder="Crear nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            onBlur={() => setTouched(true)}
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={handleChange}
          />
          <Box
            sx={{ marginTop: "25px" }}
            display={"flex"}
            justifyContent="space-around"
          >
            <Button
              onClick={() => setIsAddingEntry(false)}
              sx={{
                padding: "10px 20px",
              }}
              variant="outlined"
              color="error"
              aria-label="Cancelar una nueva entrada"
            >
              Cancelar
            </Button>
            <Button
              sx={{
                padding: "10px 20px",
              }}
              variant="outlined"
              color="secondary"
              aria-label="Agregar una nueva entrada"
              onClick={handleSubmit}
            >
              Agregar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={() => setIsAddingEntry(true)}
          sx={{
            width: "100%",
            padding: "10px 0",
          }}
          variant="outlined"
          color="secondary"
          aria-label="Agregar una nueva entrada"
        >
          <AddIcon />
        </Button>
      )}
    </>
  );
};
