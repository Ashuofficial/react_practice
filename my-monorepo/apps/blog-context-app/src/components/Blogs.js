
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
// import Card from './Card';

function Blogs() {
    console.log('inside blogs');

  // here we have to comsume the context
  // we will use useContext hook to consume the context
  const { posts, loading} = useContext(AppContext);
  
  return (
    <div className='blog-container'>
      {
        loading ?         
        <Spinner/> : 
        ( posts.length===0 ? 
          (<div>
            <p>No Posts Available</p>
          </div> ) : 
          ( posts.map((post)=>(
          // <Card key={post.id} post={post} />
          <div className='blog' key={post.id}>
            <p className='title'>{post.title}</p>
            <p>By <span>{post.author}</span> on <span>{post.category}</span> </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index)=>{
                return <span key={index}>{`#${tag} `}</span>
              }) }
            </div>
          </div>
        ) ) ) 
        )
      }
    </div>
    );
}
export default Blogs;