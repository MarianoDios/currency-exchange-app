import axios from "axios";
import type {
  CurrenciesResponse,
  RatesResponse,
} from "../types/currency.types";

const BASE_URL = "https://api.vatcomply.com";

export const getCurrenciesList = async (): Promise<CurrenciesResponse> => {
  const response = await axios.get<CurrenciesResponse>(
    `${BASE_URL}/currencies`
  );
  return response.data;
};

export const getRates = async (base: string): Promise<RatesResponse> => {
  const response = await axios.get<RatesResponse>(`${BASE_URL}/rates`, {
    params: { base },
  });
  return response.data;
};
