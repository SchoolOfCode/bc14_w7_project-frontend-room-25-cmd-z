import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeButton from './Task 1/Components/Home Button';
import QuestionComponent from './Task 1/Components/Main Container/Question Container/Question Component/index.js';
import SubmitButton from './Task 1/Components/Main Container/Question Container/Submit Button';
import TitleComponent from './Task 1/Components/Main Container/Title Component';
import TrueFalseButton from './Task 1/Components/Main Container/Question Container/truefalse Button';

ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file


function App() {
  return (
    <div className="App">
    <TitleComponent />
    <QuestionComponent />
    <HomeButton />
    <SubmitButton />
    <TrueFalseButton />
    </div>
)
}

export default App;
