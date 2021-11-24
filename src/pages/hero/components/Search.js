import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

// Component used for sorting and searching
export default function Search({
  handleChangeSearch,
  handleSearch,
  handleChangeSearchBy,
  searchText,
  searchBy,
}) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "2rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          onChange={handleChangeSearch}
          label="Search"
          variant="outlined"
          style={{ marginRight: "1rem" }}
          value={searchText}
        />

        <Button onClick={handleSearch} variant="contained">
          Search
        </Button>
      </div>

      {/* <FormControl>
        <InputLabel>Search By</InputLabel>
        <Select value={searchBy} label="Order" onChange={handleChangeSearchBy}>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"comics"}>Comics</MenuItem>
          <MenuItem value={"series"}>Series</MenuItem>
          <MenuItem value={"stories"}>Stories</MenuItem>
        </Select>
      </FormControl> */}
    </Box>
  );
}
