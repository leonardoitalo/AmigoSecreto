import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { describe, expect, test, vitest } from 'vitest'
import Footer from '.'

const mockStore = configureMockStore()
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
    const store = mockStore({
      form: {
        currentList: ['Ana', 'Catarina', 'Pedro'],
      },
    })
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    )

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const actions = store.getActions()

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio')

    expect(actions).toContainEqual({
      type: 'draw/drawName',
      payload: ['Ana', 'Catarina', 'Pedro'],
    })
  })
})
