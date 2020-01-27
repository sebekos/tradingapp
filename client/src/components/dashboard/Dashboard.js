import React, { useEffect } from "react";
import { loadUser } from "../../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Dashboard = ({ auth: { token, user } }) => {
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className="container">
            {user ? (
                <div className="user-container">
                    <div className="user-name">Welcome {user.name}</div>
                    <div className="user-balance">Current Balance: ${user.balance}</div>
                </div>
            ) : null}
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(Dashboard);
