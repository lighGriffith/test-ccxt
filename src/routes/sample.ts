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
router.get('/mybalance', async (req, res) => {
  console.log('Got a request /mybalance')
  try {
    const _response = await sample.getMyBalance();
    res.send(_response)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.get('/mybuys', async (req, res) => {
  console.log('Got a request /mybuys')
  try {
    const _response = await sample.getMyBuys();
    res.send(_response)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.get('/mysells', async (req, res) => {
  console.log('Got a request /mysells')
  try {
    const _response = await sample.getMySells();
    res.send(_response)
  } catch (error) {
    res.status(400).send(error.message)
  }
})
module.exports = router
