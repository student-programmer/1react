import React, { Component } from 'react';
import h from"./Header.module.css";
const  Header = () =>{
    return <header className={h.header}>
    <img src="https://pngimg.com/uploads/dollar_sign/dollar_sign_PNG21539.png"></img>
      <p className={h.text}>Millionaires</p>
  </header>
}
export default Header;