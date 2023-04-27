import { Routes, Route } from "react-router-dom"
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from "../src/components/HomePage/Home/home"
import Task1 from './components/Task1/index';
import Task2 from './components/Task2/task2';
import HamburgerMenu from './components/HomePage/HamburgerMenu/index'

// hello, we did it Olga shearing screen

function App() {
  return (
    <div className="container">
    {/* <HomePage/>
    <Task1/>
    <Task2/>

   */}
   {/* <HamburgerMenu/> */}
    <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="Task1" element={ <Task1/> } />
        <Route path="Task2" element={ <Task2/> } />
        <Route path = "HamburgerMenu" element={<HamburgerMenu/>} />
      </Routes>


    </div> 
)
}

export default App;


// ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file
