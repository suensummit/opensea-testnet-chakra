import axios from "axios";

// we are reading API Base URL from the ".env" file in our root directory.
const instance = axios.create({
  baseURL: process.env.OPENSEA_TESTNET_API_URL,
});

// we are reading API param from the ".env" file in our root directory.
instance.interceptors.request.use((config) => {
  config.params = { address: process.env.OPENSEA_TESTNET_ADDRESS, ...config.params };
  return config;
});

export default instance;