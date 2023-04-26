import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '@mui/material/Checkbox';
import { useCheckbox } from 'use-mui';

// make an radio button test component

function MyCheckbox() {
    const { checked, handleChange } = useCheckbox();
    return <Checkbox checked={checked} onChange={handleChange} />;
  }

export default MyCheckbox;

// How do I import the Radio component from the material-ui library into my React app? I have tried the following: 
// import Radio from 'mui/material/Radio';
// import Radio from 'material-ui/Radio';
// import Radio from '@mui/material/Radio';