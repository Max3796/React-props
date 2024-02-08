import { Component } from "react";
import React from 'react'
import "./App.css";


export default class AppClass extends Component {
  

  render() {
    let image_arr = this.props.imageData();
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        {/* <div className='parent'>
          <img src={img_Arr[0].img} className='image'/>
          <img src={img_Arr[0].img} className='image'/>
          <img src={img_Arr[0].img} className='image'/>
          <img src={img_Arr[0].img} className='image'/>
          </div> */}
        <div className="parent">
          {image_arr.map((elem,i) => {
            return <img src={elem.img} className="eleImg" key={i}/>;
          })}
        </div>
      </div>
    );
  }
}