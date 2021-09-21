<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-6xl uppercase">404</h1>
    <p>Lo siento 🙁 la página a la que intentas ingresar no existe</p>
    <router-link class="mt-5 text-xl text-green-600 hover:underline" to="/"
      >Volver al home</router-link
    >
  </div>
</template>

<style scoped>
p {
  @apply text-gray-600 text-xl text-center;
}
</style>
