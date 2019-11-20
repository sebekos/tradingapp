import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">Trading Patterns</div>
            <div className="links">
                <div className="links-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="links-item">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
