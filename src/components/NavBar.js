import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Navbar = (props) => {
  
  return (
    <>
      {/* BootStrap Navbar */}
      <nav className= "navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode} style={{color: props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? '#E1F7F5' : 'black'}}>
        <div className="container-fluid"> 
          <a className="navbar-brand" href="/">
            {props.title} 
          </a>

          {/* <Link className="navbar-brand" to="/">
            {props.title} 
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
              </a> */}
              <Link className="nav-link active" aria-current="page" to="/">
                  Home
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* sample dropdown */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />{" "}
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn-primary" type="submit">
                Search
              </button>
            </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;

// PropType, we can define the datatype of props which this component will be receiving
Navbar.propTypes = {title: PropTypes.string}

// we can also use isRequired to make sure the value is passed otherwise this will give an error
// Navbar.propTypes = {title: PropTypes.string.isRequired}

// to handle in case props aren't passed, this will prevent from error and set a default value
Navbar.defaultProps = {title: 'set title here'}
