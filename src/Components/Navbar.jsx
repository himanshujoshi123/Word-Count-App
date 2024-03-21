import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.Mode} text-${props.Mode === 'dark' ? 'light' : 'dark'} px-4`}>
        <div className={`container-fluid text-${props.Mode === 'dark'? 'light' : 'dark'}`}>
          <a className={`navbar-brand text-uppercase fw-semibold text-${props.Mode === 'dark'? 'light' : 'dark'}`} href="/">
            Word Counter
          </a>
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
                <a className={`nav-link active text-${props.Mode === 'dark'? 'light' : 'dark'}`} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.Mode === 'dark'? 'light' : 'dark'}`} href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.Mode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
