import React, { useEffect } from "react";
import queryString from "query-string";

const OAuth = ({ match }) => {
    useEffect(() => {
        console.log(match);
    }, []);
    const link =
        "https://auth.tdameritrade.com/oauth?client_id=SEBEKOS6@AMER.OAUTHAP&response_type=code&redirect_uri=http://localhost:3000/oauth";
    return (
        <div className="container">
            <div className="oauth-container">
                <a className="btn btn-primary" href={link}>
                    Login To Thinkorswim
                </a>
            </div>
        </div>
    );
};

export default OAuth;
