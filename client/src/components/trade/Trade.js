import React, { useState } from "react";

const Trade = () => {
    const [symbol, setSymbol] = useState('')

    const onChange = e => {
        setSymbol(e.target.value);
    }

    const onSubmit = e => {
        console.log(symbol);
    }

    return (
        <div className="container">
            <div className="trade-container form">
                <div className="form-group">
                    <input onChange={onChange} placeholder="Symbol" type="text" value={symbol} />
                    <button onClick={onSubmit} className="btn btn-primary">Search</button>
                </div>
                <div className="form-group"></div>
            </div>
        </div>
    );
};

export default Trade;
