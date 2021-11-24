import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function ContainerApp({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>{children}</Container>
    </React.Fragment>
  );
}
