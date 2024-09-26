import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, test } from 'vitest'
import configureStore from 'redux-mock-store'
import SortPage from '.'

const mockStore = configureStore()

describe('na pagina de sorteio', () => {
  test('todos os participantes podem exibir o seu amigo secreto', () => {
    const participantes = ['Ana', 'Catarina', 'Jorel']
    const store = mockStore({
      form: {
        currentList: participantes,
      },
    })

    render(
      <Provider store={store}>
        <SortPage />
      </Provider>
    )
    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(3)
  })
})
