

 // we need a home button (logo) at the top of the page//
 // we need a container which has an image, paragraph with small text, a button that takes us to a next and back page//

import React from 'react';

function HomePage() {
  return (
    <div>
     <img src={process.env.PUBLIC_URL + '/pexels-markus-spiske-2004161.jpg'} alt="" />
      <h1>JavaScript</h1>
      <p>JavaScript is the world's most popular programming language.<p>

        <p>This tutorial will teach you JavaScript from basic to advanced.</p>

     </p>JavaScript is the programming language of the Web. JavaScript is easy to learn.</p>

      <button>Start Learning JavaScript now</button>
    </div>
  );
}

export default HomePage;
