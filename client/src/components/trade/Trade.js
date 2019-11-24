import React from "react";

const Trade = () => {
    return (
        <div className="container">
            <div className="trade-container form">
                <div className="form-group">
                    <input placeholder="Symbol" type="text" />
                    <button className="btn btn-primary">Search</button>
                </div>
                <div className="form-group"></div>
            </div>
        </div>
    );
};

export default Trade;
