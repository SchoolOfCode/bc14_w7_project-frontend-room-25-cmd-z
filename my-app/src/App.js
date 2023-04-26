
import React from 'react';
//import Home from './Components/Home';
import HomePage from './homePage/Components/Home/home';
import NavBar from './homePage/Components/Nav-Bar/Nav';
import ContactPage from './homePage/Components/Button/contactPage/contactPage';


import { useState } from 'react';
import './App.css';


function App() {
  return (
      <div>
        <HomePage />
        <NavBar/>
        <ContactPage/>

      </div>
     
     

  );
}

export default App;
