export const candleData = data => {
    return data.map(item => {
        return [item.datetime, item.open, item.high, item.low, item.close];
    });
};
