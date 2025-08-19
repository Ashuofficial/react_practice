
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
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
          <BlogDetails key={post.id} post={post} />
        ) ) ) 
        )
      }
    </div>
    );
}
export default Blogs;