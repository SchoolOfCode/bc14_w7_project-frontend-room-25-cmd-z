import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Link } from 'react-router-dom';

function MultipleChoiceQuestion(props) {
    const [value, setValue] = React.useState(''); // this is the state of the radio button
  
    const handleChange = (event) => { // this is the function that will be called when the radio button is clicked
      setValue(event.target.value); // this will set the value of the radio button to the value of the radio button that was clicked
    };
  
    const handleSubmit = () => { // this is the function that will be called when the submit button is clicked ✅
      console.log(value); // this will log the value of the radio button to the console ✅
      props= {correctResponse: 'true'}; // this is the correct response - this is hard coded for this question ✅
      console.log(props.correctResponse); // this will log the correct response to the console ✅
      if (props.correctResponse === 'true' && value === 'true') { // this is the conditional statement that will check if the value of the radio button is equal to the correct response ✅
      
        alert('Correct! You smashed the first TEST!'); // this will log 'Correct!' to the console if the value of the radio button is equal to the correct response
      } else {
        alert("Incorrect! Rome wasn't built in a day. Have a read through the material and try again!"); // this will log 'Incorrect!' to the console if the value of the radio button is not equal to the correct response
      }
    };

    return (
      <div>
      <FormControl component="fieldset"> 
        <RadioGroup aria-label="truefalse" name="truefalse" value={value} onChange={handleChange}> {/* this is the radio group that will contain the radio buttons */}
          <FormControlLabel value="false1" control={<Radio />} label="Equals sign" /> {/* this is the true radio button */}
          <FormControlLabel value="true" control={<Radio />} label="Assignment operator" /> {/* this is the false radio button */}
          <FormControlLabel value="false2" control={<Radio />} label="Equality operator" /> {/* this is the false radio button */}
          <FormControlLabel value="false3" control={<Radio />} label="Double dash" /> {/* this is the false radio button */}
        </RadioGroup>
      </FormControl>

      <button onClick= {handleSubmit}>Submit</button>

      <Link to="/Task2">
       <button>Next</button>
      </Link>
      
      </div>
    );
  }
  
  export default MultipleChoiceQuestion;