import React, { useContext, useState } from "react";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";
export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    addMovieToWatchList,
    addMovieToWatchListFromWatched,
    removeFromWatched,
  } = useContext(GlobalContext);
  const { watchList, watched } = useContext(GlobalContext);

  // 1- Check if the sended movie is already exists in the watchlist & and book mark icon value

  const [storedMovieWatchList, setstoredMovieWatchList] = useState(
    watchList.find((o) => o.id === movie.id)
  );
  const [movieIsExistedInWatchList] = useState(
    storedMovieWatchList ? true : false
  );
  const [bookMarkIcon, SetbookMarkIcon] = useState(
    movieIsExistedInWatchList ? "fas fa-ban" : "fas fa-bookmark"
  );

  //2- values for the watched movie
  const [storedMovieWatched, setstoredMovieWatched] = useState(
    watched.find((o) => o.id === movie.id)
  );
  const [movieIsExistedInWatched] = useState(
    storedMovieWatched ? true : false
  );
  const [watchedMovieIcon, SetwatchedMovieIcon] = useState(
    movieIsExistedInWatched ? "fa-fw far fa-eye-slash" : "fa-fw far fa-eye"
  );

  return (
    <div className="inner-card-controls">
      {/* 1- if movie type is watchList  */}
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {/* 2- if movie type is watched  */}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => addMovieToWatchListFromWatched(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {/* 3- if movie type is weekly trending movies  */}
      {/* we need to add three buttons (watchlist, ) */}
      {type === "weeklyTrendingMovie" && (
        <>
          {/* add movie to watch list  */}
          <button
            className="ctrl-btn"
            onClick={() => {
              // on click add to the watch list
              setstoredMovieWatchList(watchList.find((o) => o.id === movie.id));
              var exist = watchList.find((o) => o.id === movie.id);
              if (typeof exist !== "undefined") exist = true;
              else exist = false;

              if (exist) {
                SetbookMarkIcon("fas fa-ban");
                removeMovieFromWatchlist(movie.id);
                SetbookMarkIcon("fas fa-bookmark");
              } else {
                SetbookMarkIcon("fas fa-bookmark");
                addMovieToWatchList(movie);
                SetbookMarkIcon("fas fa-ban");
              }
            }}
          >
            <i className={bookMarkIcon}></i>
          </button>
          {/* Add movie as watched movie  */}
          <button
            className="ctrl-btn"
            onClick={() => {
              setstoredMovieWatched(watched.find((o) => o.id === movie.id));
              var exist = watched.find((o) => o.id === movie.id);
              if (typeof exist !== "undefined") exist = true;
              else exist = false;

              if (exist) {
                SetwatchedMovieIcon("fa-fw far fa-eye-slash");
                removeFromWatched(movie.id);
                SetwatchedMovieIcon("fa-fw far fa-eye");
              } else {
                SetwatchedMovieIcon("fa-fw far fa-eye");
                addMovieToWatched(movie);
                SetwatchedMovieIcon("fa-fw far fa-eye-slash");
              }
            }}>
            <i className={watchedMovieIcon}></i>
          </button>
        </>
      )}
    </div>
  );
};
