import React from "react";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a href='/#' className="navbar-brand">Navbar</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <a
        href='/#'
        className="navbar-item"
        onClick={() => localStorage.removeItem("isAuth")}
        style={{cursor:'pointer', textDecoration: 'none', color: 'black'}}
      >
        Logout
      </a>
    </nav>
  );
}

export default Nav;
