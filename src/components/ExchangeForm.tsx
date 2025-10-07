import { Autocomplete, Box, Grid, IconButton, TextField } from "@mui/material";
import type { useExchange } from "../hooks/useExchange";
import { CurrencyExchange } from "@mui/icons-material";

type ExchangeFormProps = ReturnType<typeof useExchange>;

const ExchangeForm = ({
  amount,
  setAmount,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  currencyList,
}: ExchangeFormProps) => {
  const currencyOptions = currencyList ? Object.values(currencyList) : [];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      const numValue = value === "" ? 0 : parseFloat(value);
      setAmount(numValue);
    }
  };

  return (
    <Box pt={3}>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            label="Amount"
            inputMode="decimal"
            type="number"
            variant="outlined"
            value={amount === 0 ? "" : amount}
            onChange={handleAmountChange}
            fullWidth
            placeholder="0"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 3 }}>
          <Autocomplete
            options={currencyOptions}
            getOptionLabel={(option) => option.symbol}
            value={fromCurrency}
            onChange={(_, newValue) => {
              if (newValue) {
                setFromCurrency(newValue);
              }
            }}
            renderInput={(params) => <TextField {...params} label="From" />}
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 1 }}>
          <IconButton
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
            sx={{
              mx: 2,
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
                setToCurrency(newValue);
              }
            }}
            renderInput={(params) => <TextField {...params} label="To" />}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExchangeForm;
