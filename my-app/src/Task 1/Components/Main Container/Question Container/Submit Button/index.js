// create a submit button component
import React from 'react';
import './index.css';

function SubmitButton () {
    const handleSubmit = (value, correctResponse) => {
        console.log(value);
        console.log(correctResponse);
        if (correctResponse === 'false' && value === 'false') {
          alert('Correct!');
        } else {
          alert('Incorrect!');
        }
      };
    
      
    return (
        <div className="submit-button">
            <button onClick= {handleSubmit}className="submit-button">Submit</button>
        </div>
    );
}

export default SubmitButton;

