import React, { useEffect, useState } from "react";

import dateIcon from "../Images-videos/calendar.png";
import timeIcon from "../Images-videos/fast-time.png";
import searchIcon from "../Images-videos/searching.png";
import { MovieCard } from "./MovieCard";
import watchingMovie from "../Images-videos/watchingMovie.svg"

export const LandPage = () => {
  //1- Retrive list of movies trending from the api (it should be dynmaic) and save it inside list
  const [trendingList, setTrendingList] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        ""
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTrendingList(data.results);
        } else {
          setTrendingList([]);
        }
      });
  }, []);

  return (
    <>
      {/* The Intro page divided two rows */}
      <div className="container">
        <div className="introductionPage">
          {/* 1- First Part Page Introduction  */}
          <div className="welcomeSection">
            <div className="leftSection">
              <div className="appDescriptionTitle">
                <h1 style={{ color: "#21d07a" }}>Movie Browser</h1>
                <h2>
                  Unlimated Search{" "}
                  <span style={{ color: "#21d07a" }}>Movie</span> Engine.
                  <br />
                  allows you to add movies to your watch later list.
                  <br /> and allows you to define a movie as watched by
                  searching to the whole world movies.
                  <br />
                  DON'T WORRY YOUR DATA WILL BE STORED :)
                </h2>
              </div>

              <div className="moviesClassifications">
                <div className="hdIcon">HD</div>
                <div className="movieAgeRating">+18</div>
                <div className="moviesType">Drama, Actions, Horors</div>
                <div className="moviesDate">
                  <div>
                    <img src={dateIcon} />
                  </div>
                  <div>2022</div>
                </div>

                <div className="moviesTime">
                  <div>
                    <img src={timeIcon} />
                  </div>
                  <div>+60</div>
                </div>
              </div>
              <a className="searchMovieButton" href="/add">
                <img src={searchIcon} />
                <p>Search for Movies Now</p>
              </a>
            </div>

            <div className="rightSection">
            <img src={watchingMovie}/>
            </div>
          </div>
          {/* 2- Second Part Most trending this week  */}
          <div className="weeklyTrendingSection">
            <div className="descriptionTrend">

              <div className="sectionTitle">
                <h3>Trending</h3>
                <h1>Weekly Trending Movies</h1>
              </div>
              <div className="sectionButton">
                <button>Movies</button>
                <button>TV Shows</button>
              </div>

            </div>
           {/* Showing the trending Movies and Shows */}
            {
              trendingList.length >0 ? 
              (
                <div className="movie-grid">
                  {trendingList.map((movie) => 
                  (
                    <MovieCard movie={movie} key={movie.id} type={"weeklyTrendingMovie"}/>
                  ))}
                </div>
              ):<h2 className="no-movies">No Trending Movies Currenlty Availables</h2>

            }
            
          </div>
        </div>
      </div>
    </>
  );
};
