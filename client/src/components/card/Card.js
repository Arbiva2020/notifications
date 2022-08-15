import React from 'react'
import "./Card.css";

function Card({ post }) {
  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt="" className='userImg'/>
        <span>{post.fullname}</span>
      </div>
      <img src="" alt="" className='postImg'/>
    <div className='interaction'>
      <img src="" alt="" className="cardIcon" />
    </div>
    </div>
  )
}

export default Card
