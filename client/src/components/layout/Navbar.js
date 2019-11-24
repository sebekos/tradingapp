import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ isAuthenticated }) => {
    const authLinks = (
        <Fragment>
            <div className="links-item">
                <Link to="/dashboard">Home</Link>
            </div>
            <div className="links-item">
                <Link to="/trade">Trade</Link>
            </div>
            <div className="links-item">
                <Link to="/">Logout</Link>
            </div>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <div className="links-item">
                <Link to="/login">Login</Link>
            </div>
        </Fragment>
    );
    return (
        <div className="navbar">
            <div className="title">Trading Patterns</div>
            <div className="links">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Navbar);
