import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { getQuote, getYearlyChart, getMinuteChart } from '../../redux/actions/quote'
import { getUserTrades } from '../../redux/actions/trade'
import SymbolInfo from './SymbolInfo'
import TradeItem from './TradeItem'
import PropTypes from 'prop-types'
import YearlyChart from "./YearlyChart";
import MinuteChart from "./MinuteChart";

const Trade = ({getQuote, getYearlyChart, getMinuteChart, getUserTrades, auth: {tdtoken, token}, quote, trade: {trades}}) => {

    useEffect(() => {
        getUserTrades(token);
    }, []);

    const [symbol, setSymbol] = useState('')

    const onChange = e => {
        setSymbol(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        const upperSymbol = symbol.toUpperCase()
        getQuote(upperSymbol, tdtoken);
        getYearlyChart(upperSymbol, tdtoken);
        getMinuteChart(upperSymbol, tdtoken);
    }

    return (
        <div className="container">
            <div className="trade-container form">
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input onChange={onChange} placeholder="Symbol" type="text" value={symbol} />
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
            {quote.minutechart ? <MinuteChart data={quote.minutechart} /> : null}
            {quote.yearlychart ? <YearlyChart data={quote.yearlychart} /> : null}
            {quote.data ? <SymbolInfo data={quote.data} /> : null}
            {trades.length > 0 ? trades.map((item, index) => {return <TradeItem key={`trade-${index}`} data={item}/>}): null}
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
    quote: state.quote,
    trade: state.trade
});

const mapDispatchToProps = {
    getQuote,
    getYearlyChart,
    getUserTrades,
    getMinuteChart
}

Trade.propTypes = {
    auth: PropTypes.object.isRequired,
    quote: PropTypes.object.isRequired,
    trade: PropTypes.object.isRequired,
    getQuote: PropTypes.func.isRequired,
    getYearlyChart: PropTypes.func.isRequired,
    getUserTrades: PropTypes.func.isRequired,
    getMinuteChart: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
