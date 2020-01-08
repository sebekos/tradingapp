import React, { useEffect } from "react";
import { getUserTrades } from '../../redux/actions/trade'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Dashboard = ({ getUserTrades }) => {

    useEffect(() => {
        getUserTrades()
    }, [getUserTrades]);

    return (
        <div className="container">
            <div className="trade-container form">
                Welcome
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    getUserTrades: PropTypes.func.isRequired
}

export default connect(null, { getUserTrades })(Dashboard);
