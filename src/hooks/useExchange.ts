import { useCallback, useEffect, useState } from "react"
import { useCurrencies, useRates } from "./useCurrencies"
import type {
  ConversionResult,
  CurrencyData,
  RatesResponse,
} from "../types/currency.types"

export const useExchange = () => {
  const [amount, setAmount] = useState<number>(1.0)
  const [fromCurrency, setFromCurrency] = useState<CurrencyData>({
    name: "US Dollar",
    symbol: "USD",
  })
  const [toCurrency, setToCurrency] = useState<CurrencyData>({
    name: "Euro",
    symbol: "EUR",
  })
  const [transactionRates, setTransactionRates] = useState<RatesResponse>({
    date: "",
    base: "",
    rates: {},
  })
  const [transactionResult, setTransactionResult] = useState<ConversionResult>({
    amount: 0,
    from: {
      name: "",
      symbol: "",
    },
    to: {
      name: "",
      symbol: "",
    },
    result: 0,
    rate: 0,
    date: null,
  })

  const currenciesQuery = useCurrencies()
  const ratesQuery = useRates(fromCurrency.symbol)

  const calculateConversion = useCallback(() => {
    if (!ratesQuery.data?.rates || !toCurrency.symbol) return

    const rate = ratesQuery.data.rates[toCurrency.symbol]
    if (!rate) return

    const result = amount * rate

    setTransactionResult({
      amount: amount,
      from: fromCurrency,
      to: toCurrency,
      result: result,
      rate: rate,
      date: new Date(),
    })

    setTransactionRates(ratesQuery.data)
  }, [ratesQuery.data, toCurrency, amount, fromCurrency])

  useEffect(() => {
    if (ratesQuery.data?.rates) {
      calculateConversion()
    }
  }, [calculateConversion, ratesQuery.data, amount])

  return {
    amount,
    fromCurrency,
    toCurrency,
    transactionRates,
    transactionResult,
    setAmount,
    setFromCurrency,
    setToCurrency,
    calculateConversion,
    currencyList: currenciesQuery.data,
    ratesData: ratesQuery.data,
    isLoading: currenciesQuery.isLoading || ratesQuery.isLoading,
    error: currenciesQuery.error || ratesQuery.error,
  }
}
