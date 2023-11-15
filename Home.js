import React from 'react'
import './Home.css'
import Nike1 from './pages/Nike1'
import Slide1 from './pages/Slide1'
import Box from './pages/Box'
import Vid from './pages/Vid'
import Bord2 from './pages/Bord2'
import Box22 from './pages/Box22'
import Slide from './pages/Slide'
import News from './News'
const Home = () => {
  const boxesData = [
    { title: 'Product 1', imageUrl: 'https://images.unsplash.com/photo-1595909337002-3cdc3a590160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8' },
    { title: 'Product 2', imageUrl: 'https://images.unsplash.com/photo-1665517464780-ab4f42d8af95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8' },
    { title: 'Product 1', imageUrl: 'https://images.unsplash.com/photo-1595909337002-3cdc3a590160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8' },
    { title: 'Product 2', imageUrl: 'https://images.unsplash.com/photo-1665517464780-ab4f42d8af95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8' },

  ];
  const images = [
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/940d803f-91b0-4cc9-8976-477835cf3778/air-max-90-futura-shoes-nfmGzj.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48f1f3c-a7c1-4b51-b89b-3b3cd0b5fd5b/air-max-90-gore-tex-shoes-K3mBRb.png',
    // Add more image URLs as needed
  ];
  return (
   <>
   <div class="container">
    <img src='https://free4kwallpapers.com/uploads/originals/2015/07/18/nike-air-max-fly-by-brandon-roy.jpg' alt='m' className='nike1'></img>
   </div>
   <div className="container34">
      <div className="border-box34">
        <h1 id='iph1'>𝐠𝐢𝐟𝐭𝐬 𝐭𝐡𝐚𝐭 𝐦𝐨𝐯𝐞 𝐲𝐨𝐮</h1>
        <p   id='iph11'>this years gifts. next years greatness</p>
        <div className="button-container34">
          <button className="shop-button34">Shop</button>
          <button className="explore-button34">Explore</button>
        </div>
      </div>
    </div>
    <Slide1 />
    <Nike1 />
    <Box />
    <Vid />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {boxesData.map((data, index) => (
       <Bord2 key={index} title={data.title} imageUrl={data.imageUrl}  />
      ))}
    </div>
  <Box22 />
  <div>
      <h1>new launch</h1>
      <Slide images={images} />
    </div>
    <News />
   </>
  )
}

export default Home
