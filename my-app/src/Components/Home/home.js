

 // we need a home button (logo) at the top of the page//
 // we need a container which has an image, paragraph with small text, a button that takes us to a next and back page//

import React from 'react';
import "./home.css";
function HomePage() {
  return (
    <div className='container'>
  
    <button>cmd-z</button>
    <h2>JavaScript for beginers</h2>
     <img src={process.env.PUBLIC_URL + '/pexels-markus-spiske-2004161.jpg'} alt="" style={{ width: "400px", height: "auto" }}/>
     <br></br>
     <button>Start Learning JS now</button>
      <p>JavaScript is the world's most popular programming language.<p>

        <p>This tutorial will teach you JavaScript from basic to advanced.</p>

     </p>JavaScript is the programming language of the Web. JavaScript is easy to learn.</p>
     
     

      
    </div>
  );
}

export default HomePage;
