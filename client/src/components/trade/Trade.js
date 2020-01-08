import React, { useState } from "react";
import { connect } from 'react-redux'
import { getQuote } from '../../redux/actions/quote'
import SymbolInfo from './SymbolInfo'
import TradeItem from './TradeItem'
import PropTypes from 'prop-types'

const Trade = ({getQuote, auth: {tdtoken}, quote, trade: {trades}}) => {

    const [symbol, setSymbol] = useState('')

    const onChange = e => {
        setSymbol(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getQuote(symbol.toUpperCase(), tdtoken)
    }

    return (
        <div className="container">
            <div className="trade-container form">
                <form onClick={onSubmit}>
                    <div className='form-group'>
                        <input onChange={onChange} placeholder="Symbol" type="text" value={symbol} />
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
            {quote.data ? <SymbolInfo data={quote.data} /> : null}
            {trades.length > 0 ? trades.map(item => {return <TradeItem data={item}/>}): null}
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
    quote: state.quote,
    trade: state.trade
});

Trade.propTypes = {
    getQuote: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    quote: PropTypes.object.isRequired,
    trade: PropTypes.object.isRequired
};


export default connect(mapStateToProps, {getQuote})(Trade);
