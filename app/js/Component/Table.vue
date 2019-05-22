
<template>
  <div >
    <p>Sells</p>
    <p v-if="mydatas.sells.length < 1" class="empty-table">
      Pas de vente cliquer sur le bouton
    </p>
    <table v-else>
    <thead>
      <tr>
        <th>Symbole</th>
        <th>Taxe</th>
        <th>amount</th>
        <th>cost</th>
        <th>datetime</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="sell in mydatas.sells">
        <td >{{sell.symbol}}</td>
        <td >{{sell.fee.cost}}{{sell.fee.currency}}</td>
        <td >{{sell.amount}}</td>
        <td >{{sell.cost}}</td>
        <td >{{sell.datetime}}</td>
        <td >{{sell.price}}</td>
      </tr>
    </tbody>
    </table>
    <p>Buys</p>
    <p
      v-if="mydatas.buys.length < 1"
      class="empty-table"
    >
      Pas d'achat cliquer sur le bouton
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Symbole</th>
          <th>Taxe</th>
          <th>amount</th>
          <th>cost</th>
          <th>datetime</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="buy in mydatas.buys">
          <td >{{buy.symbol}}</td>
          <td >{{buy.fee.cost}}{{buy.fee.currency}}</td>
          <td >{{buy.amount}}</td>
          <td >{{buy.cost}}</td>
          <td >{{buy.datetime}}</td>
          <td >{{buy.price}}</td>
        </tr>
      </tbody>
    </table>
    <p>Balance</p>
    <p v-if="mydatas.balances.length < 1" class="empty-table">
      Pas de balance - essayer de cliquer sur le bouton
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Symbole</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(balance,key) in mydatas.balances"  >
          <td >{{key}}</td>
          <td >{{balance.total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'employee-table',
  props: {
    mydatas: Object,
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}
input {
  margin: 0;
}
.empty-table {
  text-align: center;
}
</style>
