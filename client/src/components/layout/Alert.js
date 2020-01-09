import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => (
            <div className='alerts-container'>
                  {alerts !== null && alerts.length > 0 ? 
                        alerts.map((alert, index) => (
                              <div key={'alert-' + index} className={`alert alert-${alert.alertType} alert-msg-div`}>
                                    {alert.msg}
                              </div>
                        ))  :   null
                  }
            </div>
      );

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);