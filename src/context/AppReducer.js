//The Reducer tells us how to store the data inside our store
//we are passing the state and action to the app reducer
export default (state, action) => {
  switch (action.type) {
    //what is happening:
    //action.payload is what is being send with the parameter
    //1- when we click add to movie to will add the movie to the exisiting watchList
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };

    //2- Remove movie from watch list
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    //3- ADD movie to watched
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        //remove from the watch list and added to watched
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    //4- ADD movie from watched to watchlist
    case "ADD_MOVIE_TO_WATCHLIST_FROM_WATCHED":
      return {
        //1-Remove from watched 
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList:[action.payload, ...state.watchList],
      };

    //5- remove movie from watched 
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched:state.watched.filter(
          (movie) => movie.id !== action.payload
        ),
      }
    default:
      return state;
  }
};
