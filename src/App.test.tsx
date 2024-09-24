// src/__tests__/App.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest' // Importando o expect do Vitest
import App from './App' // Ajuste o caminho para o seu componente

describe('App Component', () => {
  it('renders the title and instructions', () => {
    render(<App />)

    // Verifica se o título "Vite + React" está no documento
    const titleElement = screen.getByText(/vite \+ react/i)
    expect(titleElement).toBeInTheDocument()
  })
})
