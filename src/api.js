const API_URL = "https://api.coincap.io/v2/assets";

function getAssets() {
  return fetch(`${API_URL}/?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((e) => console.log(`Error al traer los datos. Error ${e}`));
}

function getAsset(coin) {
  return fetch(`${API_URL}/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((e) => console.log(`Error al traer los datos. Error ${e}`));
}

function getAssetHistory(coin) {
  const now = new Date(); //Crea la fecha AHORA
  const end = now.getTime(); //obtiene la hora de la nueva fecha
  now.setDate(now.getDate() - 1); // setea la fecha creada a un día anterior
  const start = now.getTime();
  return fetch(
    `${API_URL}/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((e) => console.log(`Error al traer los datos. Error ${e}`));
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
