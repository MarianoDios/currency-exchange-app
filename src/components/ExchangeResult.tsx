import { Box, Grid, Paper, Typography } from "@mui/material";
import { useViewport } from "../hooks/useViewport";
import type { ConversionResult } from "../types/currency.types";

const ExchangeResult = (transactionResult: ConversionResult) => {
  const { isMobile } = useViewport();

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              {transactionResult.amount.toFixed(2)}{" "}
              {transactionResult.from.name} =
            </Typography>
            <Typography variant="h4" color="primary" fontWeight="bold">
              {transactionResult.result.toFixed(6)} {transactionResult.to.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              1 {transactionResult.from.symbol} ={" "}
              {transactionResult.rate.toFixed(6)} {transactionResult.to.symbol}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={1}
            sx={{
              p: 3,
              bgcolor: "brand.lightPurple",
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              We use the mid-market rate for our Converter. This is for
              informational purposes only. You won't receive this rate when
              sending money.
            </Typography>
          </Paper>
          {!isMobile && (
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                {transactionResult.from.name} to {transactionResult.to.name}{" "}
                conversion — Last updated{" "}
                {transactionResult.date?.toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "UTC",
                  timeZoneName: "short",
                })}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ExchangeResult;
