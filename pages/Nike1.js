import React from 'react';
import './Nike1.css'; // Import the corresponding CSS file

const Nike1 = () => {
  return (
    <div className="container35">
      <div className="title">Featured</div>
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          alt="Imag 1"
          className="image"
          title="Image 1"
        />
        <div className="image-title">Title 1</div>
      </div>
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1628413993904-94ecb60f1239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
          alt="Imag 2"
          className="image"
          title="Image 2"
        />
        <div className="image-title">Title 2</div>
      </div>
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D"
          alt="Imag 3"
          className="image"
          title="Image 3"
        />
        <div className="image-title">Title 3</div>
      </div>
    </div>
  );
};

export default Nike1;
