import React, {useState} from 'react'
import { newTrade } from '../../redux/actions/trade'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const SymbolInfo = ({data:{symbol, description, lastPrice, lastSize, bidPrice, bidSize, askPrice, askSize}, newTrade, auth: {token}}) => {

      const [shares, setShares] = useState(100)

      const onTrade = e => {
            console.log(e.target.value);
            const formData = {
                  symbol,
                  side: e.target.value,
                  shares: shares,
                  entry_price: lastPrice
            }
            newTrade(formData, token)
      }

      return (
            <div className="symbol-container">
                  <table>
                        <thead>
                              <tr>
                                    <th colSpan='2'>{description}</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>Symbol</td>
                                    <td>{symbol}</td>
                              </tr>
                              <tr>
                                    <td>Last Price</td>
                                    <td>{lastPrice} - {lastSize}</td>
                              </tr>
                              <tr>
                                    <td>Ask Price</td>
                                    <td>{askPrice} - {askSize}</td>
                              </tr>
                              <tr>
                                    <td>Bid Price</td>
                                    <td>{bidPrice} - {bidSize}</td>
                              </tr>
                              <tr>
                                    <td className="td-trade">
                                          <button value="1" onClick={onTrade} className="btn btn-success btn-trade">Buy</button>
                                    </td>
                                    <td className="td-trade">
                                          <button value="0" onClick={onTrade} className="btn btn-danger btn-trade">Short</button>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      )
}

const mapStateToProps = state => ({
      auth: state.auth,
      quote: state.quote
});
  
SymbolInfo.propTypes = {
      newTrade: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired,
      quote: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { newTrade })( SymbolInfo )
