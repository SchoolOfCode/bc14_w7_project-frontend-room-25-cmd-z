  // we need a home button (logo) at the top of the page//
  // we need a container which has an image, paragraph with small text, a button that takes us to a next and back page//
  import { Link } from "react-router-dom";
  import React from 'react'; 
  import "./home.css"; // linked to css//
  // import Hamburger from "../HamburgerMenu";

  // This function represents the home page of the website
  function HomePage() {
    return (
      <div className='container'>

      <h2>JavaScript For Beginners</h2>
      <img src={"https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"} alt="" style={{ width: "400px", height: "auto" }}/>
      <br></br>
      
      <Link to="Task1">
      <button>Start Learning JS now</button>
      </Link>
        <p>/ = + - “”</p>
      <p>JavaScript is the world's most popular programming language.</p>
      {/* <Hamburger/> */}

  <p>This tutorial will teach you JavaScript from basic to advanced.</p> 

  <p>JavaScript is the programming language of the Web. JavaScript is easy to learn.</p>

      
      

        
      </div>
    );
  }

  export default HomePage;

