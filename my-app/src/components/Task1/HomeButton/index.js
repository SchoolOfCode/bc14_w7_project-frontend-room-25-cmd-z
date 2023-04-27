// create a button that will take the user to the home page
import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

function HomeButton () {
    return (
        <div className="home-button">
            
        <Link to="/">
            <button className="home-button">Home</button>
      </Link>
        </div>
    );
    };

export default HomeButton;