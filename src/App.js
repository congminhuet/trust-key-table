import './App.css';
import {Tabs,Table} from 'antd'
import 'antd/dist/antd.css'
import React from 'react';
import {connect} from 'react-redux';
import {getCoins,getMarkets} from './actions'
import { disbatch } from 'redux-act';

class App extends React.Component {


  componentDidMount(){
    this.props.getCoins();
    this.props.getMarkets();
  }
  
  
  render(){
    const {loading ,coins, markets ,fetchMarkets, fetchCoins} = this.props;
    const { TabPane } = Tabs;
    var arr = [];
    Object.keys(markets).forEach((e) => {
      arr.push(e.split(":")[1])
    })
    console.log(arr)

    const uniqueMarket = Array.from(new Set(arr));
    console.log(uniqueMarket);
    console.log(coins);
    console.log(markets);

  return (    
    <div>
      <Tabs type="card">
          {uniqueMarket.map((market)=>(
            <TabPane tab = {market} key = {market} >
            <table className = "styled-table">
              <thead>
              <tr>
                <th>Tên</th>
                <th></th>
                <th></th>
                <th>Giá gần nhất</th>
                <th>Biến động giá 24h</th>
                <th>Giá cao nhất</th>
                <th>Giá thấp nhất</th>
                <th>Khối lượng 24h</th>            
              </tr>
              </thead>
              <tbody> 
              {
                             
                Object.keys(markets).map((m)=>(
                  coins.map((c) => {
                    return (c.coin === m.split(":")[0] && market === m.split(":")[1])? 
                    <tr>
                      <th style = {{backgroundImage: `url(${c.icon_image})`, backgroundRepeat : 'no-repeat',backgroundSize:'contain'}} ></th>
                      <th>{c.coin}</th>
                      <th>{c.name}</th>
                      <th>{markets[m].last_price}</th>
                      <th>{markets[m].change}</th>
                      <th>{markets[m].high}</th>
                      <th>{markets[m].low}</th>
                      <th>{markets[m].volume} </th>
                    </tr>
                    : null
                  })
                ))
              }
              </tbody>
            </table>
            </TabPane>
          ))}

          {/* {
            // console.log('-----',this.props.coins )
            Object.keys(markets).map((c)=>{
            return (
              <TabPane tab = {c} key = {c} ></TabPane>)
            }
            )
          }            */}

      </Tabs>
    </div>
  );
}}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    coins: state.coins,
    markets: state.markets
  };
};

const mapDisPatchToProps = dispatch => {
  return{
    getCoins: ()=> dispatch({type : 'GET_COINS'}),
    getMarkets: ()=> dispatch({type : 'GET_MARKETS'})
  }
}

export default connect (mapStateToProps,mapDisPatchToProps)(App);
