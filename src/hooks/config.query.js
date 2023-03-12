import { useQuery } from "react-query";
import { getAssetList } from "../api/config.promise";

export function useApiConfig() {
  return useQuery("api-assets", getAssetList);
}