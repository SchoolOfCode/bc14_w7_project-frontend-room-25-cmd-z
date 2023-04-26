import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';

function TrueFalseQuestion(props) {
    const [value, setValue] = React.useState(''); // this is the state of the radio button
  
    const handleChange = (event) => { // this is the function that will be called when the radio button is clicked
      setValue(event.target.value); // this will set the value of the radio button to the value of the radio button that was clicked
    };
  
    return (
      <FormControl component="fieldset"> 
        <RadioGroup aria-label="truefalse" name="truefalse" value={value} onChange={handleChange}> {/* this is the radio group that will contain the radio buttons */}
          <FormControlLabel value="true" control={<Radio />} label="True" /> {/* this is the true radio button */}
          <FormControlLabel value="false" control={<Radio />} label="False" /> {/* this is the false radio button */}
        </RadioGroup>
      </FormControl>
    );
  }
  
  export default TrueFalseQuestion;