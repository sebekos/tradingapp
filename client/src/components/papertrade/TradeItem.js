import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeTrade } from "../../redux/actions/trade";

const TradeItem = ({
    data: { _id, symbol, shares, entry_price, entry_date, exit_price },
    auth: { token, tdtoken },
    closeTrade
}) => {
    const onClose = e => {
        closeTrade(_id, symbol, token, tdtoken);
    };

    const num = (exit_price - entry_price) * shares;
    const profit = parseFloat(Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);

    return (
        <div id={_id} className="trade-item">
            <div>
                <Moment date={entry_date} format="M/DD h:mm:ss a" />
            </div>
            <div>{symbol}</div>
            <div>{shares}</div>
            <div>{entry_price}</div>
            <div>{exit_price ? exit_price : " "}</div>
            <div>
                {exit_price ? (
                    "Closed"
                ) : (
                    <button onClick={onClose} className="btn btn-danger btn-trade">
                        Close
                    </button>
                )}
            </div>
            <div className={profit >= 0 ? "green-trade" : "red-trade"}>{exit_price ? profit : "N/A"}</div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    closeTrade
};

TradeItem.propTypes = {
    closeTrade: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeItem);
