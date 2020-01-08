import React from 'react'

const TradeItem = ({data: {symbol, shares, entry_price, entry_date}}) => {
      return (
            <div className='trade-item'>
                  <div>{symbol}</div>
                  <div>{shares}</div>
                  <div>{entry_price}</div>
                  <div>{entry_date}</div>
            </div>
      )
}

export default TradeItem;
