import { Autocomplete, Box, Grid, IconButton, TextField } from "@mui/material"
import type { useExchange } from "../hooks/useExchange"
import { CurrencyExchange } from "@mui/icons-material"
import { useState } from "react"

type ExchangeFormProps = ReturnType<typeof useExchange>

const ExchangeForm = ({
  amount,
  setAmount,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  currencyList,
}: ExchangeFormProps) => {
  const currencyOptions = currencyList ? Object.values(currencyList) : []
  const [inputValue, setInputValue] = useState<string>(amount.toString())

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const RE_EDIT = /^\d*\.?\d*$/
    const RE_NUMBER = /^\d+(?:\.\d+)?$/
    const v = e.target.value.replace(",", ".")
    
    if (!RE_EDIT.test(v)) return
    
    setInputValue(v)
    
    if (v === "" || v === ".") {
      setAmount(0)
    } else if (RE_NUMBER.test(v)) {
      setAmount(parseFloat(v))
    }
  }

  return (
    <Box pt={3}>
      <Grid container spacing={1} sx={{ mb: 4 }} width={"100%"}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            label="Amount"
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleAmountChange}
            placeholder="0.00"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 3 }}>
          <Autocomplete
            options={currencyOptions}
            getOptionLabel={(option) => option.symbol}
            value={fromCurrency}
            onChange={(_, newValue) => {
              if (newValue) {
                setFromCurrency(newValue)
              }
            }}
            renderInput={(params) => <TextField {...params} label="From" />}
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 2 }}>
          <IconButton
            onClick={() => {
              setFromCurrency(toCurrency)
              setToCurrency(fromCurrency)
            }}
            sx={{
              justifySelf: "center",
              display: "flex",
              m: 1,
              outline: "brand.purple",
              outlineWidth: "1px",
              outlineStyle: "solid",
              outlineColor: "brand.purple",
            }}
          >
            <CurrencyExchange sx={{ color: "brand.purple" }} />
          </IconButton>
        </Grid>

        <Grid size={{ xs: 12, sm: 3 }}>
          <Autocomplete
            options={currencyOptions}
            getOptionLabel={(option) => option.symbol}
            value={toCurrency}
            onChange={(_, newValue) => {
              if (newValue) {
                setToCurrency(newValue)
              }
            }}
            renderInput={(params) => <TextField {...params} label="To" />}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ExchangeForm
