import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { closeTrade } from '../../redux/actions/trade'

const TradeItem = ({data: {_id, symbol, shares, entry_price, entry_date}, auth: {token, tdtoken}, closeTrade}) => {
      const onClose = e => {
            console.log('Closing trade...');
            closeTrade( _id, symbol, token, tdtoken);
      }

      return (
            <div id={_id} className='trade-item'>
                  <div>
                        <Moment date={entry_date} format="M/DD h:mm:ss a" />
                  </div>
                  <div>{symbol}</div>
                  <div>{shares}</div>
                  <div>{entry_price}</div>
                  <div>
                        <button onClick={onClose} className="btn btn-danger btn-trade">Close</button>
                  </div>
            </div>
      )
}

const mapStateToProps = state => ({
      auth: state.auth
})

const mapDispatchToProps = {
      closeTrade
}

TradeItem.propTypes = {
      closeTrade: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeItem);
