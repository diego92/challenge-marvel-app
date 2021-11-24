import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlertError from "../../components/Alert";
import BackDrop from "../../components/BackDrop";
import { credentials } from "../../helpers/credentials";
import { API_KEY, API_URL } from "../../utils/globals";
import HeroCard from "./components/HeroCard";

// Hero detail Page
export const HeroDetail = () => {
  const [state, setState] = useState({ data: {}, loading: true, error: null });
  const { heroId } = useParams();
  const { data: hero, loading, error } = state;

  useEffect(() => {
    const getHero = async () => {
      try {
        const { hash, ts } = credentials();
        const result = await axios.get(
          `${API_URL}/characters/${heroId}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`
        );

        setState({
          data: result.data.data.results[0],
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({ data: [], loading: false, error: err });
      }
    };
    getHero();
  }, [heroId]);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {loading ? (
        <BackDrop />
      ) : error ? (
        <AlertError />
      ) : (
        <HeroCard hero={hero} withDetails withReturn />
      )}
    </div>
  );
};
