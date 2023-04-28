import React from "react";
import "../../../../../App.css";


function QuestionComponent () {
    return (
        <div className="QuestionComponent">
            <h1>TASK #1</h1>
            <h4> Introduction to Variables</h4>
            <img 
            src="./Images/SoCPlanet.png" 
            alt="SoC Planet" 
            className="right-image" 
            />


            <h4 class="underline">var / Variable</h4>
            <p>🔭 In JavaScript, a "var" is a keyword used to declare a variable, which is a container for storing data. When you declare a variable using the "var" keyword, you are essentially creating a named placeholder in memory that can hold a value.
            The basic syntax for declaring a variable using the "var" keyword is as follows:
            var variableName;</p>
            <br></br>
            <p>When it comes to naming variables in JavaScript, there are some important principles to keep in mind. These principles can help you create clear and meaningful variable names that are easy to understand and use in your code.</p>
            <br></br>
            <p>Use descriptive names: Variable names should be descriptive and indicate what kind of data they hold. This makes it easier for other developers to read and understand your code. For example, instead of using a generic name like "var x", use a more descriptive name like "var numberOfCars".</p>
            <br></br>
            <p>Naming variables in JavaScript is an important part of writing clean, readable code. By following these principles, you can create variable names that are meaningful, clear, and easy to work with.</p>
            <div>
            <h5>⚡️True ⚡️False</h5>
            <h5>⚡️ Read carefully</h5>
            <p> When naming variables in JavaScript, it’s recommended to use reserved keywords as variable names. </p>
            </div>
        </div>
    );
}

export default QuestionComponent;