<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="coin in assets"
        :key="coin.id"
      >
        <td>
          <img
            :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`"
            :alt="coin.name"
            :title="coin.name"
          />
        </td>
        <td class="font-bold">#{{ coin.rank }}</td>
        <td>{{ coin.name }}</td>
        <td>{{ Number.parseFloat(coin.priceUsd).toFixed(4) }}</td>
        <td>{{ Number.parseFloat(coin.marketCapUsd).toFixed(4) }}</td>
        <td>{{ Number.parseFloat(coin.changePercent24Hr).toFixed(4) }}</td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => [], //
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
