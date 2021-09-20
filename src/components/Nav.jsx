import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <span className="navbar-brand ms-3"><strong>IMDB</strong></span>

        
        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
       

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="https://github.com/dapuer95?tab=repositories">Creator's repo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Nav;