import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Info() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info" style={{ justifyContent: "center" }}>
        No heroes found.
      </Alert>
    </Stack>
  );
}
