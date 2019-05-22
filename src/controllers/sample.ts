// Interfaces
"use strict";

const ccxt       = require ('ccxt');
const coinbaseConfig =require('../config/config')
const sample = {
  sayHi(): string {
    const _message: string = 'Hello from the controller!'
    return _message
  },
  async getMyBuys():Promise<Array<object[]>>{
    const coinbase=new ccxt.coinbase(coinbaseConfig);
    let accounts = await coinbase.fetchAccounts();
    let buys=[];
    for(let ind in accounts){
      var account=accounts[ind];
      if(coinbase.hasFetchMyBuys){
        let buy=await coinbase.fetchMyBuys(undefined,undefined,undefined,{account_id:account.id});
        if(buy.length>0){
          buys.push(buy);
        }

      }
    }
    return buys;
  },
  async getMySells():Promise<Array<object[]>>{
    const coinbase=new ccxt.coinbase(coinbaseConfig);
    let accounts = await coinbase.fetchAccounts();
    let sells=[];
    for(let ind in accounts){
      var account=accounts[ind];
      if(coinbase.hasFetchMySells){
        let sell=await coinbase.fetchMySells(undefined,undefined,undefined,{account_id:account.id});
        if(sell.length>0){
          sells.push(sell);
        }
      }
    }
    return sells;
  },
  async getMyBalance():Promise<Array<object[]>>{
    const coinbase=new ccxt.coinbase(coinbaseConfig);
    let coinbaseBalance=null;
    if(coinbase.hasFetchBalance){
      coinbaseBalance = await coinbase.fetchBalance ();
    }
    return coinbaseBalance;
  },
  async binanceOhlvc(monnaie): Promise<Array<number[]>> {
    //const index = 4 // [ timestamp, open, high, low, close, volume ]
    const binance=new ccxt.binance ();
    //let markets = await binance.load_markets ();
    const ohlcv = await binance.fetchOHLCV (monnaie, '1h')
    return ohlcv
  },
}

export = sample
