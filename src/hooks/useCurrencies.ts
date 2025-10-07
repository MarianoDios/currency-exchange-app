import { useQuery } from '@tanstack/react-query';
import { getCurrenciesList, getRates } from '../services/CurrencysService';
import type { CurrenciesResponse, RatesResponse } from '../types/currency.types';

export const useCurrencies = () => {
  return useQuery<CurrenciesResponse, Error>({
    queryKey: ['currencies'],
    queryFn: getCurrenciesList,
    
  });
};

export const useRates = (base: string) => {
  return useQuery<RatesResponse, Error>({
    queryKey: ['rates', base],
    queryFn: () => getRates(base),
    staleTime: 3, 
    enabled: !!base
  });
};
