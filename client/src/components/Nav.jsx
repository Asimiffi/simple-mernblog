import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
    return (
        <div>
           <>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item p-2">
          <a className="nav-link text-light active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link  text-light" href="/create-blog">Create Blog</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link  text-light" href="/all-blogs"> All Blogs</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link  text-light" href="/about"> About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
           
            </>
        </div>
    )
}

export default Nav
