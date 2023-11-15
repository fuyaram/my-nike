import React from 'react'
import './Box22.css'
const Box22 = () => {
  return (
    <>
    <div style={{ display: 'flex', height: '100vh', }}>
      {/* Left Flex Side */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid black',
          position: 'relative',
        }}
      >
        <img
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cd951f3-cb9f-46a2-b7a2-9c530021a7e2/dri-fit-primary-training-t-shirt-z9dSFb.png"
          alt="Left Box Imag"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            zIndex: 1,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
        >
          <h1 id='olelo'>Nike's products exhibit exceptional quality, combining innovative design with durable materials,</h1>
        </div>
      </div>

      {/* Right Flex Side */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid black',
          position: 'relative',
        }}
      >
        <img
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-3e8f08fa-7a2f-4abe-a536-31e62c5ee908/aeroswift-5cm-running-shorts-5bdgzt.png"
          alt="Right Box Imag"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            zIndex: 1,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
        >
          <h1 id='olelo'>Nike brand signifies top-tier quality, seamlessly merging cutting-edge technology, comfort, and style</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Box22