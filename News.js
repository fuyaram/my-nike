import React from 'react'
import './News.css'

const data = [
    {
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b305acb-cb13-4888-a869-b7fc71be9e85/lebron-max90-t-shirt-CWwdZR.png',
      title: 'nike cloths white',
      paragraph: 'Nike brand signifies top-tier quality, seamlessly merging cutting-edge technology, ',
      buttonText: 'Show More',
    },
    {
        imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/57fff668-0988-42a5-94ce-7742036f5646/lebron-pullover-fleece-hoodie-lMkhMX.png',
        title: 'nike cloths white',
        paragraph: 'Nike brand signifies top-tier quality, seamlessly merging cutting-edge technology, ',
        buttonText: 'Show More',
      },
      {
        imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/118c73a4-ce4f-4465-953d-aee737412838/dna-dri-fit-20cm-basketball-shorts-T3HvSb.png',
        title: 'nike cloths for sports',
        paragraph: 'Nike brand signifies top-tier quality, seamlessly merging cutting-edge technology, ',
        buttonText: 'Show More',
      },
      
  ];
  
const News = () => {
  return (
   <>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((item, index) => (
        <div key={index} className="box">
          <img src={item.imageSrc} alt="Box Imag" />
          <h2>{item.title}</h2>
          <p>{item.paragraph}</p>
          <button>{item.buttonText}</button>
        </div>
      ))}
    </div>

   </>
  )
}

export default News