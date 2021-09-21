const API_URL = "https://api.coincap.io/v2/assets";

async function getAssets() {
  return fetch(`${API_URL}/?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((e) => console.log(`Error al traer los datos. Error ${e}`));
}

export default {
  getAssets,
};
