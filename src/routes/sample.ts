// External Libs
import express = require('express')

// External Files
import sample = require('../controllers/sample')

const router = express.Router()

router.get('/hello', async (req, res) => {
  console.log('Got a request /hello')
  try {
    const _response = await sample.sayHi()
    res.send(_response)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.get('/binanceovlhc', async (req, res) => {
  console.log('Got a request /binanceovlhc')
  try {
    const _response = await sample.binanceOhlvc("BTC/USDT")
    res.send(_response)
  } catch (error) {
    res.status(400).send(error.message)
  }
})
router.get('/binanceovlhc/:monnaie', async (req, res) => {
  let mon=(req&&req.params&&req.params.monnaie?req.params.monnaie:"BTC/USDT");
  console.log(mon);
  mon=mon.replace("_","/")
  console.log('Got a request /binanceovlhc/'+mon);
  try {
    console.log(this);
    const _response = await sample.binanceOhlvc(mon)
    res.send(_response)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router
