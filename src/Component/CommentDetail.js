import React from 'react';

// import faker from 'faker'


const ComponentDetail=(props)=>(
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="Avatar" src={props.image}/>
    </a>
    <div className="content">
      <a href="/" className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.comment}</div>
    </div>
  </div>
)

export default ComponentDetail