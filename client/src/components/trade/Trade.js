import React, { useState } from "react";
import { connect } from 'react-redux'
import { getQuote } from '../../redux/actions/quote'
import PropTypes from 'prop-types'

const Trade = ({getQuote, auth: {tdtoken}}) => {
    const [symbol, setSymbol] = useState('')

    const onChange = e => {
        setSymbol(e.target.value);
    }

    const onSubmit = e => {
        console.log(symbol);
        getQuote(symbol, tdtoken)
    }

    return (
        <div className="container">
            <div className="trade-container form">
                <div className="form-group">
                    <input onChange={onChange} placeholder="Symbol" type="text" value={symbol} />
                    <button onClick={onSubmit} className="btn btn-primary">Search</button>
                </div>
                <div className="form-group"></div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

Trade.propTypes = {
    getQuote: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};


export default connect(mapStateToProps, {getQuote})(Trade);
