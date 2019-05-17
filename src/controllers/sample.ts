// Interfaces
"use strict";

const ccxt       = require ('ccxt');

const sample = {
  sayHi(): string {
    const _message: string = 'Hello from the controller!'
    return _message
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
