import React,{useState} from 'react';
import { ResultCard } from './ResultCard';

export const Add = () => {

  //Varaible,state = for dynmaically(state) taking value of input field while typing
  const[query,setQuery] = useState("");
  //Varaible,state = for storing the result json from the API
  const [results, setResults] = useState([]);
  //0- on change of the input field value change also the value of query state
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    //1- Everytime new thing typed in the search bar we need to send API Request and fetch
    fetch("https://api.themoviedb.org/3/search/movie?api_key="+process.env.REACT_APP_TMDB_KEY+"&language=en-US&page=1&include_adult=false&query="+e.target.value)
    .then((res) => res.json())
    .then((data) =>{
      if(!data.errors) {
        setResults(data.results)
      } else {
        setResults([]);
      }
    });
  };
 


  return( 
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}/>
          </div>

          {/* Displaying the result */}
          {/* if list is not Empty only show Data  */}
          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
