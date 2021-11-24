import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function AlertError({ errorList }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {errorList ? (
        <Alert severity="error">
          It was not possible to obtain the data of the heroes. Please, try
          again.
        </Alert>
      ) : (
        <>
          <Alert severity="error">
            It was not possible to obtain the data of the hero. Please, try
            again.
          </Alert>
          <Link style={{ textDecoration: "none" }} to={`/heroes`}>
            <Button size="small" variant="contained">
              Return
            </Button>
          </Link>
        </>
      )}
    </Stack>
  );
}
