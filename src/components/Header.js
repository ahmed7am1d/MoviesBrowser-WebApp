import React from 'react';
//allows us to route and move from different pages/compnents 
import { Link } from 'react-router-dom';
import BrandLogo from '../Images-videos/tv.png';
export const Header = () => {
  return (
  <header>
      <div className="container">
          <div className="inner-content">
              {/* Logo */}
            <div className="brand">
                {/* the logo will take us back to the homepage */}
                <span className='brandLogo'>
                <img src={BrandLogo}/>
                </span>
                <Link to="/">Movie Browser</Link>
              
            </div>
            {/* To attributes describe the path of the routes */}
              {/* Links */}
                <ul className="nav-links">
                    <li>
                        <Link to="/Watchlist">Watch Later List</Link>
                    </li>

                    <li>
                        <Link to="/watched">Watched Movies</Link>
                    </li>

                    <li>
                        <Link to="/add" className="btn">+ Add</Link>
                    </li>

                    
                </ul>
          </div>
      </div>
  </header>
  )
};
