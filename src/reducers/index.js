const initState={
    loading: false,
    coins: [{
        "coin": "BTC",
        "symbol": "BTC",
        "icon_image": "data:image/png;base64,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",
        "name": "Bitcoin",
        "confirmation": 1,
        "decimals": 0,
        "type": "btc",
        "network": "testnet",
        "is_closed": false,
        "contract_address": "",
        "transaction_tx_path": "",
        "transaction_explorer": "https://www.blockchain.com/btc-testnet/tx",
        "withdrawal_threshold": 0.2,
        "created_at": 1608774825,
        "updated_at": 1608774825
      }],
    markets: {"BTC:USDT": {
        "change": 3.77,
        "high": 58940,
        "last_price": 58573.99,
        "low": 1,
        "volume": 7987.9989024
      }},
}

const reducer = (state = initState,action)=>{
    switch(action.type){
        case 'GET_COINS':
            return {...state, loading: true};
        case 'GET_MARKETS':
            return {...state, loading: true};
        case 'COINS_RECEIVED':
            return {...state, coins: action.json,loading: false};
        case 'MARKETS_RECEIVED':
            return {...state, markets: action.json,loading: false};
        default:
            return state;
    }
};

export default reducer;