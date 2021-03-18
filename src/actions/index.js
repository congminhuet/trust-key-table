export const getMarkets = () => ({
    type: 'GET_MARKETS'
});

export const getCoins = () =>({
    type: 'GET_COINS'
});

export const receiveMarkets = data => ({
    type : 'RECEIVE_MARKETS',
    data
})

export const receiveCoins = data => ({
    type : 'RECEIVE_COINS',
    data
})

