import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sumnav">
      <nav className="navbar navbar-expand-lg navbar-dark nav"> 
        <div className="container-fluid ">
          <div><Link className="navbar-brand " to="/">
            Online Shipping System
          </Link></div>
          

          <div className="flex justify-center">
              <Link className="btn btn-outline-light " to="/login">
                Login
              </Link>
            
              <Link className="btn btn-outline-light " to="/signup">
                Signup
              </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
