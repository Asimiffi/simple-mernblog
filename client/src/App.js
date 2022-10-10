
import './App.css';
import User from './user';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import CreateBlog from './pages/createBlog';
import Blogs from './pages/blogs';
import {Routes, Route, Link} from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect,useRef } from 'react';
import About from './pages/About';
import Singlepost from './pages/singlepost';


function App() {
  const [listofblogs, setlistofblogs] = useState([]);
  const [title, settitle] = useState('');
  const [category, setcategory] = useState('');
  const [content, setcontent] = useState('');
  const [index, setindex] = useState('')
  

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/blog/blogs').then((response)=>{
      setlistofblogs(response.data)
      console.log(response.data)
      
    })
  },[])
  
  
  const handleId =(id)=>{
    setindex (id);
}

  return (
    <>
    <div>
    <Nav />
    </div>
    <div className='main'>

    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/create-blog' element={<CreateBlog title={title} settitle={settitle} category={category} setcategory={setcategory} content={content} setcontent={setcontent} listofblogs={listofblogs} setlistofblogs={setlistofblogs} />}/>
    <Route exact path='/all-blogs' element={<Blogs listofblogs={listofblogs}  handleId={handleId}/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/all-blogs/:id' element={<Singlepost  singleblog={listofblogs} index={index} setindex={setindex}/>}/>
    
    </Routes>
    </div>
   </>
  );
}

export default App;
