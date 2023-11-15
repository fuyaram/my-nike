import React from 'react'
import './Vid.css'
import Card from './Card';
const Vid = () => {
    const handleBuyClick = () => {
        // Add logic for the buy button click event
        console.log('Buy button clicked');
      };
  return (
    <>
 <section className="video-section678">
    <h1>the lateast</h1>
      <video className="background-video678" autoPlay loop muted>
        <source src="https://player.vimeo.com/external/487328823.sd.mp4?s=93663658d0a11163df547c7dd8813d57c27f13ff&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>

    <div className="container3">
      <div className="border-box3">
        <p id='iph11'>new for early walkers</p>
        <h1 id='iph1'>𝐠𝐢𝐟𝐭𝐬 𝐭𝐡𝐚𝐭 𝐦𝐨𝐯𝐞 𝐲𝐨𝐮</h1>
        <p   id='iph11'>this years gifts. next years greatness</p>
        <div className="button-container3">
          <button className="shop-button3">Shop</button>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        title="Nike. Just Do It
        Give Your Feet a Hug
        "
        imageUrl="https://images.unsplash.com/photo-1560159006-de4e5ffcfd47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
        onClickBuy={handleBuyClick}
      />
      <Card
        title="a springi ride for every fun"
        imageUrl="https://images.unsplash.com/photo-1526765992122-6abcb1e0f4fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
        onClickBuy={handleBuyClick}
      />
       <Card
        title="all the causion, all the fill"
        imageUrl="https://images.unsplash.com/photo-1646747859549-56d6c2ee3e6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
        onClickBuy={handleBuyClick}
      />
      <Card
        title="nike fills emotions "
        imageUrl="https://images.unsplash.com/photo-1534437088728-1e8db7fcef94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
        onClickBuy={handleBuyClick}
      />
    </div>
    </>
  )
}

export default Vid