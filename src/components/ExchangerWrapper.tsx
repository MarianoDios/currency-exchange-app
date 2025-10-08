import { useState } from "react"
import { useExchange } from "../hooks/useExchange"
import { ErrorToast } from "./ErrorToast"
import { formatTransactionDate } from "../utils/dateUtils"
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  type Theme,
} from "@mui/material"
import ExchangeForm from "./ExchangeForm"
import ExchangeResult from "./ExchangeResult"
import { useViewport } from "../hooks/useViewport"

const ExchangerWrapper = () => {
  const [error, setError] = useState<string | null>(null)
  const exchangeManager = useExchange()
  const { isMobile } = useViewport()

  if (exchangeManager.error && !error) {
    setError("Error on loading data")
  }

  return (
    <>
      <ErrorToast error={error} onClose={() => setError(null)} />
      <Box
        sx={{
          background: (theme: Theme) =>
            `linear-gradient(180deg,${theme.palette.brand.darkPurple} 10%, ${theme.palette.brand.purple} ${isMobile? '50%': '30%'}, ${theme.palette.brand.lightGray} 30%)`,
          minHeight: { xs: "80vh", sm: "90vh" },
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
              height: "90%",
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
        <Box mx={3}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                {exchangeManager.transactionResult.from.name} to {exchangeManager.transactionResult.to.name}{" "}
                conversion — Last updated{" "}
                { exchangeManager.transactionResult.date && formatTransactionDate(exchangeManager.transactionResult.date)}
              </Typography>
            )}
      </Box>
      </Box>
    </>
  )
}

export default ExchangerWrapper
