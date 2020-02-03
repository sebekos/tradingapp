import React, { useState } from "react";
import { newTrade } from "../../redux/actions/trade";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SymbolInfo = ({
    data: { symbol, description, lastPrice, lastSize, bidPrice, bidSize, askPrice, askSize },
    newTrade,
    auth: { token, tdtoken }
}) => {
    const [shares, setShares] = useState(100);

    const onTrade = e => {
        newTrade(symbol, e.target.value, shares, token, tdtoken);
    };

    const onShares = e => {
        if (e.target.value > 100) {
            setShares(e.target.value);
        }
    };

    return (
        <div className="symbol-container">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">{description}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Symbol</td>
                        <td>{symbol}</td>
                    </tr>
                    <tr>
                        <td>Last Price</td>
                        <td>
                            {lastPrice} - {lastSize}
                        </td>
                    </tr>
                    <tr>
                        <td>Ask Price</td>
                        <td>
                            {askPrice} - {askSize}
                        </td>
                    </tr>
                    <tr>
                        <td>Bid Price</td>
                        <td>
                            {bidPrice} - {bidSize}
                        </td>
                    </tr>
                    <tr>
                        <td>Shares</td>
                        <td>
                            <input type="number" name="shares" value={shares} onChange={onShares} step="100"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-trade">
                            <button value="1" onClick={onTrade} className="btn btn-success btn-trade">
                                Buy
                            </button>
                        </td>
                        <td className="td-trade">
                            <button value="0" onClick={onTrade} className="btn btn-danger btn-trade">
                                Short
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
    quote: state.quote
});

const mapDispatchToProps = {
    newTrade
};

SymbolInfo.propTypes = {
    newTrade: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    quote: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SymbolInfo);
