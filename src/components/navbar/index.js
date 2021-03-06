import React from "react";
import { CartIcon } from "../cart";
import { NavLink, Link } from "react-router-dom";
import { Search } from "./search";

export function Navbar() {
   return (
      <nav
         style={styles.nav}
         className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg"
      >
         <a className="navbar-brand " href="/">
            سایت نمونه
         </a>
         <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span className="navbar-toggler-icon" />
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
               <li className="nav-item ">
                  <NavLink
                     activeClassName="active"
                     className="nav-link "
                     to="/"
                  >
                     خانه <span className="sr-only">(current)</span>
                  </NavLink>
               </li>
               <li className="nav-item ">
                  <NavLink
                     activeClassName="active"
                     className="nav-link "
                     to="/cart"
                  >
                     سبد خرید <span className="sr-only">(current)</span>
                  </NavLink>
               </li>
            </ul>
            <Link to="/cart" className="mr-auto pl-5">
               <div>
                  <CartIcon />
               </div>
            </Link>
            <Search />
         </div>
      </nav>
   );
}

const styles = {
   nav: {
      direction: "rtl",
      top: "0",
      position: "fixed",
      width: "100%",
      zIndex: "100",
      height: "80px",
   },
};
