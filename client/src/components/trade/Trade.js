import React, { useState } from "react";
import { connect } from 'react-redux'
import { getQuote } from '../../redux/actions/quote'
import SymbolInfo from './SymbolInfo'
import PropTypes from 'prop-types'

const Trade = ({getQuote, auth: {tdtoken}, quote}) => {
    const [symbol, setSymbol] = useState('')

    const onChange = e => {
        setSymbol(e.target.value);
    }

    const onSubmit = e => {
        console.log(symbol.toUpperCase());
        getQuote(symbol.toUpperCase(), tdtoken)
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
            {quote.data ? <SymbolInfo data={quote.data} /> : null}
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
    quote: state.quote
});

Trade.propTypes = {
    getQuote: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    quote: PropTypes.object.isRequired
};


export default connect(mapStateToProps, {getQuote})(Trade);
