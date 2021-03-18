import React from 'react';

export default class FetchData extends React.Component{
    state = {
        loading: true
    }

    async componentDidMount(){
        const url = "https://crypto.mobilelab.vn/v1/cryptotrading/setting/markets";
        const response = await fetch(url);
        const data = response.json()
    }

    

    render()
}