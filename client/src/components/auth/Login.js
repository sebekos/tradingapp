import React, { useState } from "react";

const Login = () => {
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
    };

    const { username, password } = formData;

    return (
        <div className="container">
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

export default Login;
