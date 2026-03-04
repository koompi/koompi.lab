import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('Navbar', () => {
  it('renders KOOMPI logo link', () => {
    renderWithRouter(<Navbar />)
    const logo = screen.getByRole('link', { name: /KOOMPI/i })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/')
  })

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />)
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Story/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders Fund a School button', () => {
    renderWithRouter(<Navbar />)
    const fundButton = screen.getByRole('link', { name: /Fund a School/i })
    expect(fundButton).toBeInTheDocument()
    expect(fundButton).toHaveAttribute('href', '/fund#pricing')
  })
})
