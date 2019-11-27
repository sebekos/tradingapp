import React, { useEffect, useState } from "react";
import qs from "query-string";
import { Redirect } from "react-router-dom";

const OAuth = ({ location }) => {
    const [code, setCode] = useState("");
    useEffect(() => {
        if (qs.parse(location.search).code) {
            setCode(qs.parse(location.search).code);
        }
    }, []);
    const link =
        "https://auth.tdameritrade.com/oauth?client_id=SEBEKOS6@AMER.OAUTHAP&response_type=code&redirect_uri=http://localhost:3000/oauth";
    return (
        <div className="container">
            {code ? <Redirect to="/trade" /> : "No"}
            <div className="oauth-container">
                <a className="btn btn-primary" href={link}>
                    Login To Thinkorswim
                </a>
            </div>
        </div>
    );
};

export default OAuth;
