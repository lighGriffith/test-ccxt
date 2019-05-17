import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCharts from 'vue-chartjs'
import {  Line } from 'vue-chartjs'
import moment from 'moment'
import vSelect from 'vue-select'
// CSS
require('css/main.scss')
require("vue-select/dist/vue-select.css");

// VueJs
Vue.use(VueResource)
let monnaieSelected="";

Vue.component('line-chart', {
  extends: Line,
  mounted () {
    this.$http.get('http://localhost:3001/api/sample/binanceovlhc/BTC_USDT').then((res) => {
      var labels=[];
      var values=[];
      moment.locale('fr');
      res.body.forEach((item)=>{
        labels.push(moment(item[0]).format('Do MMMM YYYY, h:mm:ss a'));
        values.push(item[1]+item[2]+item[3]+item[4])
      });
      this.renderChart({
        labels: labels,
        datasets: [
          {
            label: (monnaieSelected?monnaieSelected:'BTC/USDT')+' Valeur($)=f(temps)',
            backgroundColor: 'blue',
            data: values
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    })
  },

})

var vm = new Vue({
  el: '.app2',
  methods: {
     getBinanceOvlhc()  {
       console.log(monnaieSelected);
      this.$http.get('http://localhost:3001/api/sample/binanceovlhc/'+(monnaieSelected?monnaieSelected:"BTC_USDT")).then((res) => {
        var labels=[];
        var values=[];
        moment.locale('fr');
        res.body.forEach((item)=>{
          labels.push(moment(item[0]).format('Do MMMM YYYY, h:mm:ss a'));
          values.push(item[1]+item[2]+item[3]+item[4])
        });
        this.$children[0].renderChart({
          labels: labels,
          datasets: [
            {
              label: (monnaieSelected?monnaieSelected:'BTC/USDT')+' Valeur($)=f(temps)',
              backgroundColor: 'blue',
              data: values
            }
          ]
        }, {responsive: true, maintainAspectRatio: false})
      })
    }
    },
})
Vue.component('v-select', vSelect)

new Vue({
  el: '.app3',
  data: {
    options: ['ETH_BTC','LTC_BTC','BNB_BTC','NEO_BTC','QTUM_ETH','EOS_ETH','SNT_ETH','BNT_ETH','BCC_BTC','GAS_BTC','BNB_ETH','BTC_USDT','ETH_USDT','HSR_BTC','OAX_ETH','DNT_ETH','MCO_ETH','ICN_ETH','MCO_BTC','WTC_BTC','WTC_ETH','LRC_BTC','LRC_ETH','QTUM_BTC','YOYOW_BTC','OMG_BTC','OMG_ETH','ZRX_BTC','ZRX_ETH','STRAT_BTC','STRAT_ETH','SNGLS_BTC','SNGLS_ETH','BQX_BTC','BQX_ETH','KNC_BTC','KNC_ETH','FUN_BTC','FUN_ETH','SNM_BTC','SNM_ETH','NEO_ETH','IOTA_BTC','IOTA_ETH','LINK_BTC','LINK_ETH','XVG_BTC','XVG_ETH','SALT_BTC','SALT_ETH','MDA_BTC','MDA_ETH','MTL_BTC','MTL_ETH','SUB_BTC','SUB_ETH','EOS_BTC','SNT_BTC','ETC_ETH','ETC_BTC','MTH_BTC','MTH_ETH','ENG_BTC','ENG_ETH','DNT_BTC','ZEC_BTC','ZEC_ETH','BNT_BTC','AST_BTC','AST_ETH','DASH_BTC','DASH_ETH','OAX_BTC','ICN_BTC','BTG_BTC','BTG_ETH','EVX_BTC','EVX_ETH','REQ_BTC','REQ_ETH','VIB_BTC','VIB_ETH','HSR_ETH','TRX_BTC','TRX_ETH','POWR_BTC','POWR_ETH','ARK_BTC','ARK_ETH','YOYOW_ETH','XRP_BTC','XRP_ETH','MOD_BTC','MOD_ETH','ENJ_BTC','ENJ_ETH','STORJ_BTC','STORJ_ETH','BNB_USDT','VEN_BNB','YOYOW_BNB','POWR_BNB','VEN_BTC','VEN_ETH','KMD_BTC','KMD_ETH','NULS_BNB','RCN_BTC','RCN_ETH','RCN_BNB','NULS_BTC','NULS_ETH','RDN_BTC','RDN_ETH','RDN_BNB','XMR_BTC','XMR_ETH','DLT_BNB','WTC_BNB','DLT_BTC','DLT_ETH','AMB_BTC','AMB_ETH','AMB_BNB','BCC_ETH','BCC_USDT','BCC_BNB','BAT_BTC','BAT_ETH','BAT_BNB','BCPT_BTC','BCPT_ETH','BCPT_BNB','ARN_BTC','ARN_ETH','GVT_BTC','GVT_ETH','CDT_BTC','CDT_ETH','GXS_BTC','GXS_ETH','NEO_USDT','NEO_BNB','POE_BTC','POE_ETH','QSP_BTC','QSP_ETH','QSP_BNB','BTS_BTC','BTS_ETH','BTS_BNB','XZC_BTC','XZC_ETH','XZC_BNB','LSK_BTC','LSK_ETH','LSK_BNB','TNT_BTC','TNT_ETH','FUEL_BTC','FUEL_ETH','MANA_BTC','MANA_ETH','BCD_BTC','BCD_ETH','DGD_BTC','DGD_ETH','IOTA_BNB','ADX_BTC','ADX_ETH','ADX_BNB','ADA_BTC','ADA_ETH','PPT_BTC','PPT_ETH','CMT_BTC','CMT_ETH','CMT_BNB','XLM_BTC','XLM_ETH','XLM_BNB','CND_BTC','CND_ETH','CND_BNB','LEND_BTC','LEND_ETH','WABI_BTC','WABI_ETH','WABI_BNB','LTC_ETH','LTC_USDT','LTC_BNB','TNB_BTC','TNB_ETH','WAVES_BTC','WAVES_ETH','WAVES_BNB','GTO_BTC','GTO_ETH','GTO_BNB','ICX_BTC','ICX_ETH','ICX_BNB','OST_BTC','OST_ETH','OST_BNB','ELF_BTC','ELF_ETH','AION_BTC','AION_ETH','AION_BNB','NEBL_BTC','NEBL_ETH','NEBL_BNB','BRD_BTC','BRD_ETH','BRD_BNB','MCO_BNB','EDO_BTC','EDO_ETH','WINGS_BTC','WINGS_ETH','NAV_BTC','NAV_ETH','NAV_BNB','LUN_BTC','LUN_ETH','TRIG_BTC','TRIG_ETH','TRIG_BNB','APPC_BTC','APPC_ETH','APPC_BNB','VIBE_BTC','VIBE_ETH','RLC_BTC','RLC_ETH','RLC_BNB','INS_BTC','INS_ETH','PIVX_BTC','PIVX_ETH','PIVX_BNB','IOST_BTC','IOST_ETH','CHAT_BTC','CHAT_ETH','STEEM_BTC','STEEM_ETH','STEEM_BNB','NANO_BTC','NANO_ETH','NANO_BNB','VIA_BTC','VIA_ETH','VIA_BNB','BLZ_BTC','BLZ_ETH','BLZ_BNB','AE_BTC','AE_ETH','AE_BNB','RPX_BTC','RPX_ETH','RPX_BNB','NCASH_BTC','NCASH_ETH','NCASH_BNB','POA_BTC','POA_ETH','POA_BNB','ZIL_BTC','ZIL_ETH','ZIL_BNB','ONT_BTC','ONT_ETH','ONT_BNB','STORM_BTC','STORM_ETH','STORM_BNB','QTUM_BNB','QTUM_USDT','XEM_BTC','XEM_ETH','XEM_BNB','WAN_BTC','WAN_ETH','WAN_BNB','WPR_BTC','WPR_ETH','QLC_BTC','QLC_ETH','SYS_BTC','SYS_ETH','SYS_BNB','QLC_BNB','GRS_BTC','GRS_ETH','ADA_USDT','ADA_BNB','CLOAK_BTC','CLOAK_ETH','GNT_BTC','GNT_ETH','GNT_BNB','LOOM_BTC','LOOM_ETH','LOOM_BNB','XRP_USDT','BCN_BTC','BCN_ETH','BCN_BNB','REP_BTC','REP_ETH','REP_BNB','BTC_TUSD','TUSD_BTC','ETH_TUSD','TUSD_ETH','TUSD_BNB','ZEN_BTC','ZEN_ETH','ZEN_BNB','SKY_BTC','SKY_ETH','SKY_BNB','EOS_USDT','EOS_BNB','CVC_BTC','CVC_ETH','CVC_BNB','THETA_BTC','THETA_ETH','THETA_BNB','XRP_BNB','TUSD_USDT','IOTA_USDT','XLM_USDT','IOTX_BTC','IOTX_ETH','QKC_BTC','QKC_ETH','AGI_BTC','AGI_ETH','AGI_BNB','NXS_BTC','NXS_ETH','NXS_BNB','ENJ_BNB','DATA_BTC','DATA_ETH','ONT_USDT','TRX_BNB','TRX_USDT','ETC_USDT','ETC_BNB','ICX_USDT','SC_BTC','SC_ETH','SC_BNB','NPXS_BTC','NPXS_ETH','VEN_USDT','KEY_BTC','KEY_ETH','NAS_BTC','NAS_ETH','NAS_BNB','MFT_BTC','MFT_ETH','MFT_BNB','DENT_BTC','DENT_ETH','ARDR_BTC','ARDR_ETH','ARDR_BNB','NULS_USDT','HOT_BTC','HOT_ETH','VET_BTC','VET_ETH','VET_USDT','VET_BNB','DOCK_BTC','DOCK_ETH','POLY_BTC','POLY_BNB','PHX_BTC','PHX_ETH','PHX_BNB','HC_BTC','HC_ETH','GO_BTC','GO_BNB','PAX_BTC','PAX_BNB','PAX_USDT','PAX_ETH','RVN_BTC','RVN_BNB','DCR_BTC','DCR_BNB','USDC_BNB','USDC_BTC','MITH_BTC','MITH_BNB','BCH_BTC','BSV_BTC','BCH_USDT','BSV_USDT','BNB_PAX','BTC_PAX','ETH_PAX','XRP_PAX','EOS_PAX','XLM_PAX','REN_BTC','REN_BNB','BNB_TUSD','XRP_TUSD','EOS_TUSD','XLM_TUSD','BNB_USDC','BTC_USDC','ETH_USDC','XRP_USDC','EOS_USDC','XLM_USDC','USDC_USDT','ADA_TUSD','TRX_TUSD','NEO_TUSD','TRX_XRP','XZC_XRP','PAX_TUSD','USDC_TUSD','USDC_PAX','LINK_USDT','LINK_TUSD','LINK_PAX','LINK_USDC','WAVES_USDT','WAVES_TUSD','WAVES_PAX','WAVES_USDC','BCH_TUSD','BCH_PAX','BCH_USDC','BSV_TUSD','BSV_PAX','BSV_USDC','LTC_TUSD','LTC_PAX','LTC_USDC','TRX_PAX','TRX_USDC','BTT_BTC','BTT_BNB','BTT_USDT','BNB_USDS','BTC_USDS','USDS_USDT','USDS_PAX','USDS_TUSD','USDS_USDC','BTT_PAX','BTT_TUSD','BTT_USDC','ONG_BNB','ONG_BTC','ONG_USDT','HOT_BNB','HOT_USDT','ZIL_USDT','ZRX_BNB','ZRX_USDT','FET_BNB','FET_BTC','FET_USDT','BAT_USDT','XMR_BNB','XMR_USDT','ZEC_BNB','ZEC_USDT','ZEC_PAX','ZEC_TUSD','ZEC_USDC','IOST_BNB','IOST_USDT','CELR_BNB','CELR_BTC','CELR_USDT','ADA_PAX','ADA_USDC','NEO_PAX','NEO_USDC','DASH_BNB','DASH_USDT','NANO_USDT','OMG_BNB','OMG_USDT','THETA_USDT','ENJ_USDT','MITH_USDT','MATIC_BNB','MATIC_BTC','MATIC_USDT','ATOM_BNB','ATOM_BTC','ATOM_USDT','ATOM_USDC','ATOM_PAX','ATOM_TUSD','ETC_USDC','ETC_PAX','ETC_TUSD','BAT_USDC','BAT_PAX','BAT_TUSD']
  },
  methods: {
   RefreshGrid: function (monnaie) {
        monnaieSelected=monnaie;
        console.log(monnaieSelected);
    }
   }
})
