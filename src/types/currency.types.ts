export interface Currency {
  code: string
  name: string
  symbol: string
}

export interface CurrencyData {
  name: string
  symbol: string
}

export interface CurrenciesResponse {
  [key: string]: CurrencyData
}

export interface RatesResponse {
  date: string
  base: string
  rates: {
    [key: string]: number
  }
}

export interface ConversionResult {
  amount: number
  from: CurrencyData
  to: CurrencyData
  result: number
  rate: number
  date: Date | null
}
