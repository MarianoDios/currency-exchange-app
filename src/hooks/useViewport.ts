import { useMediaQuery, useTheme } from '@mui/material'

export const useViewport = () => {
  const theme = useTheme()
  
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  
  return {
    isMobile,
    isDesktop
  }
}
