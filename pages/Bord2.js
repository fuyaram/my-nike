import React from 'react'
import './Bord2.css'
const Bord2= ({ title, imageUrl }) => {
  return (
   <>
   <div className="border-box200">
      <img src={imageUrl} alt="Product" className="box-image" />
      <div className="box-overlay">
        <h2 className="box-title">{title}</h2>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
   </>
  )
}

export default Bord2