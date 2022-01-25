
import './App.css';
import './LandPage.css';
import './MovieDetails.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add} from './components/Add';
import './lib/font-awesome/css/all.min.css';
import {GlobalProvider} from './context/GlobalState';
import { LandPage } from './components/LandPage';
import { MovieDetails } from './components/MovieDetails';

function App() {
  return (
    // Wrapping our whole application with the global provider so it has access to the context
    <GlobalProvider>
    <Router>
      {/* Header will be appearing on every single page */}

      <Header/>
      {/* Switch component to allow us move around the application */}
      <Routes>

        <Route exact path="/" element={<LandPage/>}>
        </Route>

        {/* 1- Router that's return the watch list (main page) */}
        {/* It is Exact path means first component that will appear */}
        
        <Route path="/Watchlist" element={<Watchlist />}>
        </Route>

        {/* 2- Route that's return the watched component */}
        <Route path="/Watched" element={<Watched />}>
        </Route>

        {/* 3- Route that's return the Add Movie Component  */}
        <Route path="/add" element={ <Add />}>
        </Route>

        {/* 4- Route for the Movie Details Page  */}
        <Route path="/MovieDetails/:movie" element={<MovieDetails/>}>

        </Route>
        </Routes>
    </Router>

    </GlobalProvider>
  );
};

export default App;
