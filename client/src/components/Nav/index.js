import React from "react";
import "./style.css";

function Nav() {
  return (
  <nav className="navbar navbar-light custom-nav-color">
  <a className="navbar-brand" href="/">Search Google Books</a>
  <a className=" navbar-brand navbar-light" href="/savedbooks">Saved Books</a>
</nav>
  );
}

export default Nav;
