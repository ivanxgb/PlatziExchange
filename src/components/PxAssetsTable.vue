<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="
              bg-gray-100
              focus:outline-none
              border-b border-gray-400
              py-2
              px-4
              block
              w-full
              appearance-none
              leading-normal
            "
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100"
        v-for="coin in filteredAssets"
        :key="coin.id"
      >
        <td>
          <img
            :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`"
            :alt="coin.name"
            :title="coin.name + ' - ' + coin.symbol"
            class="w-10 h-10"
          />
        </td>
        <td class="font-bold">#{{ coin.rank }}</td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: coin.id } }"
            >{{ coin.name }}
            <small class="ml-1 text-gray-500">{{ coin.symbol }}</small>
          </router-link>
        </td>
        <td>{{ coin.priceUsd | dollar }}</td>
        <td>{{ coin.marketCapUsd | dollar }}</td>
        <td
          :class="
            coin.changePercent24Hr.includes('-')
              ? 'text-red-500'
              : 'text-green-500'
          "
        >
          {{ coin.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <px-button @custom-click="goToCoin(coin.id)">Detalles</px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton.vue";
export default {
  components: { PxButton },
  name: "PxAssetsTable",

  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },

  props: {
    assets: {
      type: Array,
      default: () => [], //
    },
  },

  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;

      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((actual, before) => {
          if (parseInt(actual.rank) > parseInt(before.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id: id } });
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
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
