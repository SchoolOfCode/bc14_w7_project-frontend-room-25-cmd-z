import React from 'react';
import ReactDOM from 'react-dom';
import HomeButton from './HomeButton/index';
import QuestionComponent from './MainContainer/QuestionContainer/QuestionComponent/index';
//import SubmitButton from './Task 1/Components/Main Container/Question Container/Submit Button';
// import TitleComponent from './MainContainer/TitleComponent/index';
// import TrueFalseButton from './Task 1/Components/Main Container/Question Container/truefalse Button';
import TrueFalseQuestion from './MainContainer/TrueFalse/index';
import '../../App.css';





function Task1() {
  return (
    <div className="container">
    <HomeButton />
    {/* <TitleComponent /> */}
    <QuestionComponent />
    <TrueFalseQuestion />
    <br></br>
    </div> 
)
}

export default Task1;


//ReactDOM.render(<App />, document.getElementById('root'));  //this is the root element in the index.html file
