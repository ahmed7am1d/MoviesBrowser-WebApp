import React, { useState, Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

export const MovieDetails = () => {
  //1- Getting the movie id from any page
  let params = useParams();
  const [specficMovieDetails, setspecficMovieDetails] = useState([]);
  const [genersList, setgenersList] = useState([]);
  const [movieTrailerLinlk, setMovieTrailerLink] = useState("");
  //2- retrive the movie object from the api
  //we will use (useEffect) to retrive new info everytime the component is loaded
  let one = "https://api.themoviedb.org/3/movie/" +
    params.movie +
    "?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US";
  let two = "https://api.themoviedb.org/3/movie/" +
    params.movie +
    "/videos?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);


  useEffect(() => {
    window.scrollTo(0, 0);
    axios.all([requestOne, requestTwo]).then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      // use/access the results
      setspecficMovieDetails(responseOne.data);
      setgenersList(responseOne.data.genres);
      setMovieTrailerLink("https://www.youtube.com/watch?v="+responseTwo.data.results[0].key);

    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });
  }, []);
  //3- getting the rating stars
  let arrayStars = [];
  switch (parseInt(specficMovieDetails.vote_average, 10)) {
    case 1:
      arrayStars = ["fa fa-star"];
      break;
    case 2:
      arrayStars = ["fa fa-star", "fa fa-star"];
      break;
    case 3:
      arrayStars = ["fa fa-star", "fa fa-star", "fa fa-star"];
      break;
    case 4:
      arrayStars = ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star"];
      break;
    case 5:
      arrayStars = [
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
      ];
      break;
    case 6:
      arrayStars = [
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
      ];
      break;
    case 7:
      arrayStars = [
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
      ];
      break;
    case 8:
      arrayStars = [
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
      ];
      break;
    case 9:
      arrayStars = [
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
      ];
      break;
    case 10:
      arrayStars = [
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
        "fa fa-star",
      ];
      break;
  }
 
  return (
    <div className="mainPage">
      <div className="upperSectionbg">
        <div className="container">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w200${specficMovieDetails.poster_path}`}
            />
          </div>

          <div className="brief">
            <h1>{specficMovieDetails.original_title}</h1>
            <span className="runTime">{specficMovieDetails.runtime} Min</span>
            <h3>{specficMovieDetails.release_date}</h3>

            {/* Rating here */}
            {/* give it margin zero from above and down  */}

            <div className="ratingDes">
              <div className="ratingValue">
                {specficMovieDetails.vote_average}
              </div>
              <div className="ratingStars">
                {arrayStars.map((star) => (
                  <i className={star}></i>
                ))}
              </div>
            </div>
            <h3>
              <span style={{ color: "var(--secondary)" }}>Budget:</span>{" "}
              {specficMovieDetails.budget}$
            </h3>
            <div className="genres">
              {genersList.map((gener) => (
                <div key={gener.id}>{gener.name} </div>
              ))}
            </div>
          </div>

          <div className="buttonsRow">
            <a href={movieTrailerLinlk} target='_blank'>
              Play Trailer
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="lowerSection">
        <div className="container">
          <h3 className="aboutHeader">About the movie :</h3>
          <img
            className="backdropPath"
            src={
              "https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500" +
              specficMovieDetails.backdrop_path
            }
          ></img>
          <div className="moveiDescription">
            <h5>
              <span>- Summary :</span> {specficMovieDetails.overview}
            </h5>
            <h4>
              <span>- Orignal Lanugate:</span>{" "}
              {specficMovieDetails.original_language}
            </h4>
            <h4>
              <span>- Home Page: </span>
              <a href={specficMovieDetails.homepage} target="_blank">
                {specficMovieDetails.homepage}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
