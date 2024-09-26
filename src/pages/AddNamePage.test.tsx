import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { describe, expect, test, vitest } from 'vitest'
import AddNamePage from './AddNamePage'

const mockNavigate = vitest.fn()
vitest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  }
})

describe('a pagina de adicionar nome', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <Provider store={store}>
        <AddNamePage />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
