import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Dashboard = ({ auth:{token} }) => {
    return (
        <div className="container">
            <div className="trade-container form">
                Welcome
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
})

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

export default connect( mapStateToProps, null)(Dashboard);
