import React from 'react';
import './blogs.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Blogs = (props, handleId) => {

      
    return (
        <div>
           
            {props.listofblogs.map((blog,id)=>(
                <div>
                <div className="blog">   
                 <Link to={`/all-blogs/${id}`}  onClick={()=>props.handleId(id)}>
                <div className="heading">  
                <h2 className='title'> {blog.title} </h2>
                 <p className='category text-muted'>Category: {blog.category}</p>
                 </div>  
                 </Link>
                 <p className='content'>{blog.content}</p>
                 
                 </div>
                 </div>
            ))}
           

        </div>
    )
}

export default Blogs
