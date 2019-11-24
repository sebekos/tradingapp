import React, { useState } from "react";
import { login } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ login, auth: { isAuthenticated } }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onLogin = () => {
        console.log(formData);
        login(formData);
    };

    const { username, password } = formData;

    return (
        <div className="container">
            {isAuthenticated ? <Redirect to="/dashboard" /> : null}
            <div className="login-container form">
                <div className="form-group">
                    <input
                        name="username"
                        placeholder="Username"
                        type="text"
                        onChange={onChange}
                        value={username}
                    />
                </div>
                <div className="form-group">
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={onChange}
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={onLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { login })(Login);
