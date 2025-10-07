import { useState } from "react";
import { useExchange } from "../hooks/useExchange";
import { ErrorToast } from "./ErrorToast";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  type Theme,
} from "@mui/material";
import ExchangeForm from "./ExchangeForm";
import ExchangeResult from "./ExchangeResult";

const ExchangerWrapper = () => {
  const [error, setError] = useState<string | null>(null);
  const exchangeManager = useExchange();

  if (exchangeManager.error && !error) {
    setError("Error on loading data");
  }

  return (
    <>
      <ErrorToast error={error} onClose={() => setError(null)} />
      <Box
        sx={{
          background: (theme: Theme) =>
            `linear-gradient(180deg,${theme.palette.brand.darkPurple} 10%, ${theme.palette.brand.purple} 30%, ${theme.palette.brand.lightGray} 30%)`,
          minHeight: { xs: 320, sm: 380 },
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          justifyContent="center"
          sx={{ py: 8, color: "white" }}
        >
          {exchangeManager.amount} {exchangeManager.fromCurrency.symbol} to{" "}
          {exchangeManager.toCurrency.symbol} - Convert{" "}
          {exchangeManager.fromCurrency.name} to{" "}
          {exchangeManager.toCurrency.name}
        </Typography>

        <Box
          sx={{
            height: "70%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              height: "80%",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <CardContent>
                <ExchangeForm {...exchangeManager} />
                <ExchangeResult {...exchangeManager.transactionResult} />
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ExchangerWrapper;
