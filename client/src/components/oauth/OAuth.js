import React, { useEffect, useState } from "react";
import qs from "query-string";
import { Redirect } from "react-router-dom";
import { oAuthLogin, oAuthRefresh } from '../../redux/actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const OAuth = ({ location, oAuthLogin, oAuthRefresh, auth: {tdrefresh} }) => {
    
    const [code, setCode] = useState("");

    useEffect(() => {
        if (qs.parse(location.search).code) {
            let tempCode = qs.parse(location.search).code;
            setCode(tempCode);
            oAuthLogin(tempCode)
        }
    }, []);

    const onRefresh = () => {
        oAuthRefresh(tdrefresh);
    }

    const link =
        "https://auth.tdameritrade.com/oauth?client_id=SEBEKOS6@AMER.OAUTHAP&response_type=code&redirect_uri=http://localhost:3000/oauth";

    return (
        <div className="container">
            {code ? <Redirect to="/trade" /> : "No"}
            <div className="oauth-container">
                <div>
                    <a className="btn btn-primary" href={link}>
                        Login To Thinkorswim
                    </a>
                </div>
                <div>
                    <button onClick={onRefresh} className='btn btn-success'>
                        Refresh Token
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

OAuth.propTypes = {
    oAuthLogin: PropTypes.func.isRequired,
    oAuthRefresh: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {oAuthLogin, oAuthRefresh})(OAuth);
