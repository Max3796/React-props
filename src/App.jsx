import './App.css';
import React from 'react'
import elephant from "./images/elephant.jpeg";



function App(props) {
  // code here
  let image_arr = props.imageData()

  return (
    <>
      <h1>Kalvium Gallery</h1>
      <div className='parent'>
          {/* <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" /> */}
          
          {image_arr.map((elem,i) => {
            return <img src={elem.img} className="eleImg" key={i}/>;
          })}


      </div>
    
    </>
  )
}

export default App;
