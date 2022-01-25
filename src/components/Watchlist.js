import React from "react";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  //1- Access our watchlist save it inside watchList
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watch Later Movies</h1>
          <span className="count-pill">
          {watchList.length} {watchList.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>


        {watchList.length > 0 ? (<div className="movie-grid">
          {watchList.map((movie) => (
            // Send the movie to the MovieCard Component and show this component
            <MovieCard movie={movie} key={movie.id} type="watchList" />
          ))}
        </div>) : <h2 className="no-movies">No Movies in your list, add Some !!!</h2>}
        
      </div>
    </div>
  );
};
