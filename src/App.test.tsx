import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App'

const theme = createTheme()

describe('App', () => {
  it('renders title and button', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Currency Exchange/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Counter:/i })).toBeInTheDocument()
  })
})


