import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
//We will pass to this component the [Movie] to access the info
//don't forget the ternary operator
export const ResultCard = ({ movie }) => {
  //we need to get access to the action [add movie] and watchList from GlobalContext
  //movie can not be added if it is already added
  const { addMovieToWatchList,addMovieToWatched, watchList, watched } = useContext(GlobalContext);
  let storedMovie = watchList.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const navigate = useNavigate();
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      {/* Poster Image */}
      <div className="poster-wrapper" onClick={() => {
      navigate('/MovieDetails/'+movie.id)}}>
        {movie.poster_path ? (
          <img
            src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
            alt={movie.title + "Poster"}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      {/* Poster Info */}
      <div className="info">
        <div className="header">
          <h3 className="title" onClick={() => {
      navigate('/MovieDetails/'+movie.id)}}>{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "Release Date Not Provided By The API"}
          </h4>
        </div>
        {/* Controlls or Button */}
        <div className="controls">
        <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
