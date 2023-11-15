import React, { useState, useEffect } from 'react';
import './Nav2.css'; // Make sure to have corresponding CSS file

const Nav2 = () => {
  const contentData = [
    { title: 'New Styles on Sale: Up to 40% Off', paragraph: 'Shop All Our New Markdowns' },
    { title: 'Hello Nike App', paragraph: 'Download the app to access everything Nike. Get Your Great' },
    { title: 'New Styles on Sale: Up to 40% Off', paragraph: 'Shop All Our New Markdowns' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, contentData.length]);

  return (
    <div className="app365">
      <nav className="navbar2">
        <div className="centered">
          <h1 id='ohh'>{contentData[currentIndex].title}</h1>
          <p id='no'>{contentData[currentIndex].paragraph}</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav2;
