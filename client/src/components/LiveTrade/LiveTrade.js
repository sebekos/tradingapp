import React, { useState } from "react";
import { connect } from "react-redux";
import { getQuote } from "../../redux/actions/quote";
import PropTypes from "prop-types";

const LiveTrade = ({ getQuote, auth: { tdtoken, token } }) => {
    const [symbol, setSymbol] = useState("");

    const onChange = e => {
        setSymbol(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        const upperSymbol = symbol.toUpperCase();
        console.log(upperSymbol);
    };

    return (
        <div className="container">
            <div className="trade-container form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input onChange={onChange} placeholder="Symbol" type="text" value={symbol} />
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    getQuote
};

LiveTrade.propTypes = {
    auth: PropTypes.object.isRequired,
    getQuote: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveTrade);
