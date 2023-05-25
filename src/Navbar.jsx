import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid ps-0 pe-0 d-flex align-items-center">
                <NavLink className="navbar-brand" to="/">
                  Saransh Mittal
                </NavLink>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item-drop dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Projects
                      </NavLink>
                      <ul
                        className="dropdown-menu py-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink
                            id = "project-links"
                            className="dropdown-item bg-white text-dark"
                            to="https://saransh-mittal.github.io/todolist/"
                          >
                            ToDo List
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            id = "project-links"
                            className="dropdown-item bg-white text-dark"
                            to="https://saransh-mittal.github.io/wordguessgame/"
                          >
                            Word Guess Game
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            id = "project-links"
                            className="dropdown-item bg-white text-dark"
                            to="https://saransh-mittal.github.io/gkeepclone/"
                          >
                            Google Keep Clone
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            id = "project-links"
                            className="dropdown-item bg-white text-dark"
                            to="https://saransh-mittal.github.io/counterGreaterThan0/"
                          >
                            Counter
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
