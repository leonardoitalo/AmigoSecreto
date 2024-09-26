import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { describe, expect, test, vitest } from 'vitest'
import Footer from '.'

const mockStore = configureStore()
const mockNavigate = vitest.fn()

vitest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  }
})

describe('quando não existem participantes suficientes', () => {
  const store = mockStore({
    form: {
      currentList: [],
    },
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    )

    const botao = screen.getByRole('button')
    expect(botao).toBeDisabled()
  })
})

describe('quando existem participantes suficientes', () => {
  const store = mockStore({
    form: {
      currentList: ['Ana', 'Catarina', 'Pedro'],
    },
  })

  test('a brincadeira pode ser iniciada', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    )

    const botao = screen.getByRole('button')
    expect(botao).not.toBeDisabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    )

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
  })
})
