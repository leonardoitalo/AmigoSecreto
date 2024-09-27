import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, test } from 'vitest'
import configureStore from 'redux-mock-store'
import DrawPage from '.'

const mockStore = configureStore()

describe('na pagina de sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Jorel']
  const resultado = {
    Ana: 'Jorel',
    Jorel: 'Catarina',
    Catarina: 'Ana',
  }

  const store = mockStore({
    form: {
      currentList: participantes,
    },
    draw: {
      selectedName: resultado,
    },
  })

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <Provider store={store}>
        <DrawPage />
      </Provider>
    )
    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(3)
  })

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <Provider store={store}>
        <DrawPage />
      </Provider>
    )

    const select = screen.getByRole('combobox')

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    })

    const botao = screen.getByRole('button')

    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')

    expect(amigoSecreto).toBeInTheDocument()
  })
})
