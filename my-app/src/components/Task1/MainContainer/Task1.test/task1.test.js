// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { TrueFalseQuestion } from '../TrueFalse/index';

// describe('TrueFalseQuestion', () => {
//     it('should render the TrueFalseQuestion component', () => {
//         const props = { correctResponse: 'false' };
//         const { getByLabelText, getByText } = render(<TrueFalseQuestion {...props} />);
//     const falseRadio = screen.getByLabelText('False');
//     const submitButton = screen.getByText('Submit');

//     fireEvent.click(falseRadio);
//     fireEvent.click(submitButton);

//     expect(window.alert).toHaveBeenCalledWith('Correct! You smashed the first TEST!');
//   });

//   it('displays incorrect answer message when incorrect answer is selected', () => {
//     const props = { correctResponse: 'false' };
//     const { getByLabelText, getByText } = render(<TrueFalseQuestion {...props} />);
//     const trueRadio = screen.getByLabelText('True');
//     const submitButton = screen.getByText('Submit');

//     fireEvent.click(trueRadio);
//     fireEvent.click(submitButton);

//     expect(window.alert).toHaveBeenCalledWith('Incorrect! Rome wasn’t built in a day. Have a read through the material and try again!');
//   });
// });