import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.brand.deepBlue,
  color: "white",
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <StyledAppBar position="static">
      <Toolbar >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Currency exchange
        </Typography>
      </Toolbar>
    </StyledAppBar>

    <Box sx={{ height: "100vh" }}>
      {children}
    </Box>
  </>
)

export default MainLayout
