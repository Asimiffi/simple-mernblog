import React from 'react'
import './About.css'
import aboutImage from './../images/blog.jpg'

const About = () => {
    return (
        <div>
            <div className="about">
            <h2 className='p-3'>About</h2>
            <div className="row">
                <div className="col-4">
           
           <p>This is a website, where you can share your work, experience or exploration with the entire world.
               In order to get started go over to the create blog section. Give the title mark the category and
               add the content that you want to add. There you go, your content will be live immediately. whether
               you are an artist sharing your work, an entrepreneur trying to grow your business, or marketer who
               wants to promote his business or you want to earn few extra bucks, by google advertisements, which
               we can share then this platform site is for you.
               </p> 
               </div>
               <div className="col-8">
                   <img src={aboutImage} className='about-image' alt="" />
               </div>
               </div>
               </div>
        </div>
    )
}

export default About
