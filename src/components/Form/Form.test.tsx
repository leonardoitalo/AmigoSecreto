import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Form from '.'
import { Provider } from 'react-redux'
import { store } from 'store'

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes do participantes')

  // encontrar o botão
  const botao = screen.getByRole('button')

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument()

  // garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled()
})

test('adicionar um participante caso exista um nome preenchido', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes do participantes')

  // encontrar o botão
  const botao = screen.getByRole('button')

  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina',
    },
  })

  // clicar no botão de submeter
  fireEvent.click(botao)

  // garantir que o input esteja com o focus ativo
  expect(input).toHaveFocus()

  // garantir que o input não tenha um valor
  expect(input).toHaveValue('')
})

test('nomes duplicados não podem ser adicionados na lista', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  const input = screen.getByPlaceholderText('Insira os nomes do participantes')

  const botao = screen.getByRole('button')

  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina',
    },
  })
  fireEvent.click(botao)

  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina',
    },
  })
  fireEvent.click(botao)

  const mensagemDeErro = screen.getByRole('alert')

  expect(mensagemDeErro.textContent).toBe(
    'Nomes duplicaddos não são permitidos!'
  )
})
