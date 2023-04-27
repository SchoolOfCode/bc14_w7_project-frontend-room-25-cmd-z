import { Routes, Route } from "react-router-dom"
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from "../src/components/HomePage/Home/home"
import Task1 from './components/Task1/index';
import Task2 from './components/Task2/task2';

// hello, we did it Olga shearing screen

function App() {
  return (
    <div className="container">
    {/* <HomePage/>
    <Task1/>
    <Task2/>
   */}
    <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="Task1" element={ <Task1/> } />
        <Route path="contact" element={ <Task2/> } />
      </Routes>


    </div> 
)
}

export default App;


// ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file
