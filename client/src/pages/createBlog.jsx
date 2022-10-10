import React from 'react'
import './createblog.css'
import Axios from 'axios';


const CreateBlog = ({settitle, category, setcategory, setcontent, title, content, listofblogs, setlistofblogs}) => {
    console.log(title, category,setcategory)
    const addblog =()=>{
        
        Axios.post('http://localhost:3001/api/blog/createblog',
        {  title,
          category,
          content
        }).then((response)=>{
          alert('Your blog has been created, go to the All blogs section to view it')
          setlistofblogs([...listofblogs,{title,category,content}])
          
        })
      }
      
    return (
        <div>
          <h2>Create Blog</h2> 
          <div className='wrapper'>
          <div className="form-card">
          <label for="title">Title</label>
          <input type="text" id='title'  maxlength="44" onChange={(event)=>{settitle(event.target.value)}} /> <br />
          <label for="category">Cateogory</label>
          <input type="category" id='category' onChange={((event)=>{setcategory(event.target.value)})} /> <br />
          <label for="content">Content</label>
          <textarea type="text" id='content' onChange={((event)=>{setcontent(event.target.value)})}/> <br />
          
          <button onClick={addblog}>Create Blog</button>
          </div>
          </div>  
          
        </div>
    )
}
export default CreateBlog
