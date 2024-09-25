import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { describe, expect, test } from 'vitest'
import NamesList from 'components/NamesList'

const mockStore = configureStore()

describe('uma lista vazia de participantes', () => {
  const store = mockStore({
    form: {
      currentList: [],
    },
  })

  test('deve ser renderizada sem elementos', () => {
    render(
      <Provider store={store}>
        <NamesList />
      </Provider>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })
})

describe('uma lista preenchida de participantes', () => {
  const participantes = ['Ana', 'Bruno', 'Carla']
  const store = mockStore({
    form: {
      currentList: participantes,
    },
  })

  test('deve renderizar a lista com 3 nomes', () => {
    render(
      <Provider store={store}>
        <NamesList />
      </Provider>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(participantes.length)
  })
})
