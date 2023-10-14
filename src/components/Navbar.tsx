import { NavLink, Route } from "react-router-dom";
import { useRef } from 'react'

export const Navbar = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            ShowApp
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/top-rated"
                >
                  Top Rated
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={() => {
              
              if (searchRef.current?.value){
                // console.log(searchRef.current.value)
                <Route to={`/search-results/${searchRef.current.value}`}/>
              }
            }}>
              <input
                className="form-control me-2"
                ref={searchRef}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
