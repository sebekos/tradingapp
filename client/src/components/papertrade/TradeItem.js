import React from 'react'
import Moment from 'react-moment'

const TradeItem = ({data: {_id, symbol, shares, entry_price, entry_date}}) => {
      return (
            <div id={_id} className='trade-item'>
                  <div>
                        <Moment date={entry_date} format="M/DD h:mm:ss a" />
                  </div>
                  <div>{symbol}</div>
                  <div>{shares}</div>
                  <div>{entry_price}</div>
                  <div>
                        <button className="btn btn-danger btn-trade">Close</button>
                  </div>
            </div>
      )
}

export default TradeItem;
