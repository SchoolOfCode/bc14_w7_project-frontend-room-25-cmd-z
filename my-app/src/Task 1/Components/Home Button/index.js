// create a button that will take the user to the home page
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HomeButton = () => {
    return (
        <div className="home-button">
        <Link to="../../../app.js">
            <button className="home-button">Home</button>
        </Link>
        </div>
    );
    };

export default HomeButton;