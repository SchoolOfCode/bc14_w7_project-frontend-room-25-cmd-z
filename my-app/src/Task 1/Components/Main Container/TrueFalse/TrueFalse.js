import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';

function TrueFalseQuestion(props) {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl component="fieldset">
        <RadioGroup aria-label="truefalse" name="truefalse" value={value} onChange={handleChange}>
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </FormControl>
    );
  }
  
  export default TrueFalseQuestion;