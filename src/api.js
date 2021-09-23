const API_URL = "https://api.coincap.io/v2/assets";

async function request(complement) {
  const req = await fetch(`${API_URL}${complement}`);
  const res = await req.json();
  return await res.data;
}

async function getAssets() {
  return await request("/?limit=20");
}

async function getAsset(coin) {
  return await request(`/${coin}`);
}

async function getAssetHistory(coin) {
  const now = new Date(); //Crea la fecha AHORA
  const end = now.getTime(); //obtiene la hora de la nueva fecha
  now.setDate(now.getDate() - 1); // setea la fecha creada a un día anterior
  const start = now.getTime();
  const API_COMPLEMENT = `/${coin}/history?interval=h1&start=${start}&end=${end}`;

  return await request(API_COMPLEMENT);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
