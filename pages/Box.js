import React from 'react';
import './Box.css'; // Import your CSS file for styling
const cardsData = [
    {
      id: 1,
      title: 'Nike SNKRS: Revolutionizing Sneaker Culture',
      paragraph: 'Nike SNKRS, a revolutionary platform for sneaker enthusiasts, has transformed the way people engage with and purchase exclusive Nike releases. Launched in 2015, SNKRS offers a unique digital experience, providing users with real-time updates on upcoming releases, ',
      imageUrl: 'https://media.istockphoto.com/id/1158454287/photo/womens-shoes-in-a-shop-shoe-color.webp?s=170667a&w=0&k=20&c=WOuuUJsEUibC5kXsK2M3XnPj57f6VrZ9g0fQg9qeKfM=', // Replace with your image URL
    },
    {
        id: 1,
        title: 'Nike SNKRS: The Power of Augmented Reality in Sneaker Drops',
        paragraph: 'Nike SNKRS has harnessed the power of augmented reality (AR) to elevate the sneaker buying experience. By integrating AR technology into its platform, SNKRS allows users to virtually try on sneakers before purchasing, creating a more interactive and personalized shopping journey. ',
        imageUrl: 'https://images.unsplash.com/photo-1610897600804-c36e2336ad3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', // Replace with your image URL
      },
      
     
  ];
  
const Box = () => {
  return (
    <div className="container456">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-paragraph">{card.paragraph}</p>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
