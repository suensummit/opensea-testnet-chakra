import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getAssetList() {
  return axios.get(ENDPOINTS.assets);
}