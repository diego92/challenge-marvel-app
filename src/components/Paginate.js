import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Paginate = ({ offset, setOffset, count }) => {
  const handleChangePaginate = (e, page) => {
    setOffset(page !== 1 ? (page - 1) * 20 : 0);
  };

  console.log(count);
  return (
    <Stack spacing={2}>
      <Pagination
        count={parseInt(count / 20 + 1, 10)}
        onChange={handleChangePaginate}
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      />
    </Stack>
  );
};
