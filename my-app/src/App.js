import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeButton from './Task 2/Components/Home Button';
import QuestionComponent from './Task 2/Components/Main Container/Question Container/Question Component/index.js';
import TitleComponent from './Task 2/Components/Main Container/Title Component';
import MultipleChoiceQuestion from './Task 2/Components/Main Container/Multiple Choice/index';





function App() {
  return (
    <div className="container">
    <HomeButton />
    <TitleComponent />
    <QuestionComponent />
    <MultipleChoiceQuestion />
    <br></br>
    </div> 
)
}

export default App;


// ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file