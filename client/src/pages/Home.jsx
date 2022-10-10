import React from 'react'
import './Home.css'
import image from './../images/image3.png'

const Home = () => {
    return (
        <div>
            <div className="row header-div d-flex">
                <div className="col-4 header-text text-align-center">
                    This is a bloggers site, where you can add and share your blogs with the world
                </div>
                <div className="col-7">
                    <img className='header-image' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
