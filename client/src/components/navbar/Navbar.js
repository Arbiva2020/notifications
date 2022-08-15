import React from 'react'
import "./Navbar.css";
import Notification from "../../img/notification.png"
import Message from "../../img/message.png"
import Settings from "../../img/settings.png"

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>/nav</span>
      <div className='icons'>
        <div className='icon'></div>
          <img src={Notification} className='iconImg' alt=""/>
          <div className="counter">2</div>
      </div>
      <div className='icons'>
        <div className='icon'></div>
          <img src={Message} className='iconImg' alt=""/>
          <div className="counter">2</div>
      </div>
      <div className='icons'>
        <div className='icon'></div>
          <img src={Settings} className='iconImg' alt=""/>
          <div className="counter">2</div>
      </div>
    </div>
  )
}

export default Navbar
