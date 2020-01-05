import React from 'react'

const SymbolInfo = ({data:{symbol, description, lastPrice, lastSize, bidPrice, bidSize, askPrice, askSize}}) => {
      return (
            <div className="symbol-container">
                  <table>
                        <thead>
                              <tr>
                                    <th colspan='2'>{description}</th>
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
                                          <button className="btn btn-success btn-trade">Buy</button>
                                    </td>
                                    <td className="td-trade">
                                          <button className="btn btn-danger btn-trade">Sell</button>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      )
}

export default SymbolInfo
