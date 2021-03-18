import { put,takeLatest,all } from 'redux-saga/effects';

function* fetchMarkets(){
    const json = yield fetch('https://crypto.mobilelab.vn/v1/cryptotrading/setting/markets')
        .then(respone => respone.json());
        ////
    yield put({type: "MARKETS_RECEIVED",json: json.data})
}

function* fetchCoins(){
    const json = yield fetch('https://crypto.mobilelab.vn/v1/cryptotrading/setting/coins')
        .then(respone => respone.json());
        ////
    yield put({type: "COINS_RECEIVED",json: json.data})
}

function* actionWatcher() {
    yield takeLatest('GET_MARKETS', fetchMarkets)
    yield takeLatest('GET_COINS', fetchCoins)
}

export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }