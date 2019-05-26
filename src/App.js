import React from 'react';
import faker from 'faker';
// import classes from './App.module.css';
import CommentDetail from './Component/CommentDetail'
import ApprovalCard from './Component/ApprovalCard'

const comment=()=>(
  
<div className="ui container comments">
  <ApprovalCard>
    <CommentDetail 
      author="Raja" 
      timeAgo="Today at 2:00" 
      comment="cool!!" 
      image={faker.image.avatar()}
    />
  </ApprovalCard>
  <ApprovalCard>
    <CommentDetail 
      author="Ravish" 
      timeAgo="Today at 4:00" 
      comment="cool Post !!" 
      image={faker.image.avatar()}
    />
  </ApprovalCard>


  <ApprovalCard>
   <CommentDetail 
    author="Kumar" 
    timeAgo="Today at 7:30" 
    comment="coolest post!!" 
    image={faker.image.avatar()}
 />
</ApprovalCard>
</div>
)

export default comment;
