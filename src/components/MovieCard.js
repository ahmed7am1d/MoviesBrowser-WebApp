import React from "react";
import { MovieControls } from "./MovieControls";
import { MovieDetails } from "./MovieDetails";
import { Watchlist } from "./Watchlist";
import { useNavigate } from "react-router-dom";


export const MovieCard = ({ movie, type }) => {

  const navigate = useNavigate();
  return (
    //1- When Clicking on the movie Card navigate us to the movie details
    <div className="movie-card">
      <div className="overlay" onClick={() => {
      navigate('/MovieDetails/'+movie.id)}}
      ></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

    <MovieControls  type={type} movie={movie}/>
    </div>
  );
};