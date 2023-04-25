import { useState } from 'react';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeButton from './Task 1/Components/Home Button';
import QuestionComponent from './Components/Main Container/Question Container/Question Component/index.js';
import { H1Test } from './Components/Main Container/Question Container/Question Component/index.js';

ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file


function App() {
  return (
    <div className="App">
    {/* import the question component here */}
    <QuestionComponent /> {/*this is the question component*/}
     <HomeButton />
     <H1Test />
    </div>
)
}

export default App;
