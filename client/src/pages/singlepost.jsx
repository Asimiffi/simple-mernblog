import React from 'react'
import { useParams } from 'react-router-dom'
import './singlepost.css'

const Singlepost = ({singleblog, index, setindex}) => {
    const {id} = useParams();
    console.log(singleblog[index].title)
    console.log(id)
    return (

        
        <div>
           <div className="top">
            <h1 className='full-title text-center m-5'>{singleblog[id].title}</h1>
            <div className='full-category text-muted'>Category: {singleblog[id].category}</div>
            </div>
            <div className='full-content px-5 mx-5'>{singleblog[id].content}</div>
        </div>
    )
}

export default Singlepost
    