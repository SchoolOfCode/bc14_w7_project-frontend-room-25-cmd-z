import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { Link } from 'react-router-dom';
import '../../../../App.css';

function TrueFalseQuestion(props) {
    const [value, setValue] = React.useState(''); // this is the state of the radio button
  
    const handleChange = (event) => { // this is the function that will be called when the radio button is clicked
      setValue(event.target.value); // this will set the value of the radio button to the value of the radio button that was clicked
    };
  
    const handleSubmit = () => { // this is the function that will be called when the submit button is clicked ✅
      console.log(value); // this will log the value of the radio button to the console ✅
      props= {correctResponse: 'false'}; // this is the correct response - this is hard coded for this question ✅
      console.log(props.correctResponse); // this will log the correct response to the console ✅
      if (props.correctResponse === 'false' && value === 'false') { // this is the conditional statement that will check if the value of the radio button is equal to the correct response ✅
      
        alert('Correct! You smashed the first TEST!'); // this will log 'Correct!' to the console if the value of the radio button is equal to the correct response
      } else {
        alert('Incorrect! Rome wasn’t built in a day. Have a read through the material and try again!'); // this will log 'Incorrect!' to the console if the value of the radio button is not equal to the correct response
      }
    };

    return (
      <div className="FormControlStyles button-container">
      <FormControl component="fieldset"> 
        <RadioGroup aria-label="truefalse" name="truefalse" value={value} onChange={handleChange}> {/* this is the radio group that will contain the radio buttons */}
          <FormControlLabel value="true" control={<Radio />} label="True" /> {/* this is the true radio button */}
          <FormControlLabel value="false" control={<Radio />} label="False" /> {/* this is the false radio button */}
        </RadioGroup>
      </FormControl>
      

      <button className="NextButton" onClick= {handleSubmit}>Submit</button>
      <Link to="/Task2">
       <button>Next</button>
      </Link>
      </div>
    );
  }
  
  export default TrueFalseQuestion;