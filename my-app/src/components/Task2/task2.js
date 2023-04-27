import React from 'react';
import ReactDOM from 'react-dom';
import HomeButton from './MainContainer/HomeButton/index';
import QuestionComponent from './MainContainer/QuestionContainer/QuestionComponent/index';
import TitleComponent from './MainContainer/TitleComponent/index';
import MultipleChoiceQuestion from './MainContainer/MultipleChoice/index';





function Task2() {
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

export default Task2;


// ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file


