import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertError from "../../components/Alert";
import BackDrop from "../../components/BackDrop";
import { credentials } from "../../helpers/credentials";
import { API_KEY, API_URL } from "../../utils/globals";
import HeroCard from "./components/HeroCard";
import Search from "./components/Search";

export const HeroList = () => {
  const [state, setState] = useState({ data: [], loading: true, error: null });
  const { data: heroes, loading, error } = state;
  const [searchText, setSearchText] = useState(
    localStorage.getItem("searchText") || ""
  );
  const [searchBy, setSearchBy] = useState(
    localStorage.getItem("searchBy") || "name"
  );

  // Effect for heroes request
  useEffect(() => {
    const getHeroes = async () => {
      try {
        const { hash, ts } = credentials();

        if (!searchText) {
          const result = await axios.get(
            `${API_URL}/characters?ts=${ts}&apikey=${API_KEY}&hash=${hash}`
          );
          setState({ data: result.data, loading: false, error: null });
        } else {
          handleSearch();
        }
      } catch (err) {
        setState({ data: [], loading: false, error: err });
      }
    };
    getHeroes();
    return () => {
      setState({ data: [], loading: true, error: null });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async () => {
    try {
      const { hash, ts } = credentials();

      if (searchText) {
        const result = await axios.get(
          `${API_URL}/characters?${searchBy}=${searchText}&ts=${ts}&apikey=${API_KEY}&hash=${hash}`
        );
        setState({ data: result.data, loading: false, error: null });
      } else {
        const result = await axios.get(
          `${API_URL}/characters?ts=${ts}&apikey=${API_KEY}&hash=${hash}`
        );
        setState({ data: result.data, loading: false, error: null });
      }
    } catch (err) {
      setState({ data: [], loading: false, error: err });
    }
  };

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
    localStorage.setItem("searchText", e.target.value);
  };

  const handleChangeSearchBy = (e) => {
    setSearchBy(e.target.value);
    localStorage.setItem("searchBy", e.target.value);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {loading ? (
        <BackDrop />
      ) : error ? (
        <AlertError errorList />
      ) : (
        <div style={{ marginBottom: "2rem" }}>
          <Search
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
            searchText={searchText}
            handleChangeSearchBy={handleChangeSearchBy}
            searchBy={searchBy}
          />
          {/* <Sorting handleSort={handleSortBy} handleSearch={handleSearch} /> */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {heroes.data.results.map((hero) => (
              <Grid item xs={4} sm={4} md={4} key={hero.id}>
                <HeroCard hero={hero} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};
