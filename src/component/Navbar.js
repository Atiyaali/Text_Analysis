import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/TextForm">{props.title}</Link> */}
      <a className="navbar-brand" href="/TextForm">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/About">{props.abouttext}</Link>
            <a className="nav-link active" aria-current="page" href="/About">{props.abouttext}</a>
          </li> */}
          <li className="nav-item">
            {/* <Link className="nav-link" to="/TextForm">Home</Link> */}
            <a className="nav-link" href="/TextForm">Home</a>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div class={`form-check form-switch text-${props.Mode==="light"?"dark":"light"}`}>
        <input class="form-check-input" onClick={props.togglestyle} type="checkbox" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">ChangeMode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string
  };
 
  Navbar.defaultProps = {
    title: 'Add Value Here'
  };