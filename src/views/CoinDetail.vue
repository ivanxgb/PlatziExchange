<template>
  <div class="flex-col">
    <template v-if="coin.id">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`"
            :alt="coin.name + ' image'"
            :title="coin.name"
            class="w-20 h-20 mr-5"
          />
          <h1 class="text-5xl">
            {{ coin.name }}
            <small class="sm:mr-2 text-gray-500">{{ coin.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <p class="text-gray-600 mr-10 font-bold uppercase">Ranking</p>
              <span>#{{ coin.rank }}</span>
            </li>

            <li class="flex justify-between">
              <p class="text-gray-600 mr-10 font-bold uppercase">
                Precio Actual
              </p>
              <span>{{ coin.priceUsd | dollar }}</span>
            </li>

            <li class="flex justify-between">
              <p class="text-gray-600 mr-10 font-bold uppercase">
                Precio más bajo
              </p>
              <span>{{ min | dollar }}</span>
            </li>

            <li class="flex justify-between">
              <p class="text-gray-600 mr-10 font-bold uppercase">
                Precio más alto
              </p>
              <span>{{ max | dollar }}</span>
            </li>

            <li class="flex justify-between">
              <p class="text-gray-600 mr-10 font-bold uppercase">
                Precio promedio
              </p>
              <span>{{ avg | dollar }}</span>
            </li>

            <li class="flex justify-between">
              <p class="text-gray-600 mr-10 font-bold uppercase">
                Variación 24hs
              </p>
              <span>{{ coin.changePercent24Hr | percent }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="
              bg-green-500
              hover:bg-green-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            Cambiar
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="converValue">
              <input
                type="number"
                id="converValue"
                class="
                  text-center
                  bg-white
                  focus:outline-none focus:shadow-outline
                  border border-gray-300
                  rounded-lg
                  py-2
                  px-4
                  block
                  w-full
                  appearance-none
                  leading-normal
                "
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "CoinDetail",

  data() {
    return {
      coin: {},
      history: [],
    };
  },

  async created() {
    this.getCoin();
  },

  computed: {
    min() {
      return Math.min(
        ...this.history.map((price) => parseFloat(price.priceUsd).toFixed(2))
      );
    },

    max() {
      return Math.max(
        ...this.history.map((price) => parseFloat(price.priceUsd).toFixed(2))
      );
    },

    avg() {
      return (
        this.history.reduce(
          (pricePrevious, priceActual) =>
            pricePrevious + parseFloat(priceActual.priceUsd),
          0
        ) / this.history.length
      );
    },
  },

  methods: {
    async getCoin() {
      const id = await this.$route.params.id;
      console.log("Id es: " + id);
      this.coin = await api.getAsset(id);
      this.history = await api.getAssetHistory(id);
    },
  },
};
</script>
