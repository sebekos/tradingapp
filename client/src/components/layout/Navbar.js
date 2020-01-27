import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import PropTypes from "prop-types";

const Navbar = ({ isAuthenticated, logout }) => {
    const onLogout = e => {
        e.preventDefault();
        logout();
    };

    const authLinks = (
        <Fragment>
            <div className="links-item">
                <Link to="/dashboard">Home</Link>
            </div>
            <div className="links-item">
                <Link to="/livetrade">Live Trade</Link>
            </div>
            <div className="links-item">
                <Link to="/papertrade">Paper Trade</Link>
            </div>
            <div className="links-item">
                <Link to="/oauth">oAuth</Link>
            </div>
            <div className="links-item">
                <Link onClick={onLogout} to="/">
                    Logout
                </Link>
            </div>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <div className="links-item">
                <Link to="/">Login</Link>
            </div>
        </Fragment>
    );
    return (
        <div className="navbar">
            <div className="title">Trading Patterns</div>
            <div className="links">{isAuthenticated ? authLinks : guestLinks}</div>
        </div>
    );
};

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
