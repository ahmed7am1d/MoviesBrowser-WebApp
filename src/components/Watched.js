import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {MovieCard} from "../components/MovieCard";
import watchedICON from "../Images-videos/3d-movie.png";
import watcheListICON from "../Images-videos/watching-a-movie.png";
// 
export const Watched = () => {
    const {watched} = useContext(GlobalContext);
    // const ={watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
 return (
    <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">Watched Movies</h1>
                <div className="count-pill-div" numberofWatchedMovie={watched.length}>
                <img src={watchedICON} className="count-pill"/>
                </div>
          
            </div>
            {watched.length > 0 ?
            (
                <div className="movie-grid">
                    {watched.map((movie) => (
                        <MovieCard movie={movie} type="watched"/>
                    ))}
                </div>
            ): (
                <h2 className="no-movies">No Movies have been watched Yet :(.</h2>
            )}
        </div>
    </div>
 );
};
