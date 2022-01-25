import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  //if there is a local storage in browser then fill watchList with it otherwise keep it empty
  watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
// create context for the above [initialState]
export const GlobalContext = createContext(initialState);

//so to be able to provide this to other component we need to make something
//called a provider which basically allows us to access that global context from other varaibles
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //we will use useEffect this is triggered whenever state is changed
  //we will use it to store our watch list or whenever is a move added to local storage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  
  //actions (what will happen when add to watch list)
  //1- Action adding movie 
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  //2- Action remove movie by id 
  const removeMovieFromWatchlist = (id) => {
    dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:id})
  };

  //3- action to move a movie from watchlist to watched list
  const addMovieToWatched = (movie) => {
    dispatch({type:"ADD_MOVIE_TO_WATCHED",payload: movie})
  };

  //4- move to watchList 
    const addMovieToWatchListFromWatched = (movie) => {
      dispatch({type:"ADD_MOVIE_TO_WATCHLIST_FROM_WATCHED",payload: movie})
    };

  //5- remove from watched 
   const removeFromWatched = (id) => {
     dispatch({type:"REMOVE_FROM_WATCHED",payload:id});
   };


  return (
    //provides all the component with the values
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchlist,
        addMovieToWatched,
        addMovieToWatchListFromWatched,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
