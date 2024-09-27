import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { addParticipantWithTimeout, clearError } from 'store/Form/slice'
import { ButtonForm, FormContainer } from './styles'
import { Icon, Input } from 'styles/GlobalComponents'

const Form = () => {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const errorMessage = useSelector((state: RootState) => state.form.error)
  const dispatch: AppDispatch = useDispatch()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (errorMessage) {
      dispatch(clearError()) // Limpar o erro após o tempo definido
    }
    dispatch(addParticipantWithTimeout(nome))

    setNome('')
    inputRef.current?.focus()
  }

  return (
    <FormContainer onSubmit={adicionarParticipante}>
      <Icon $topMobile="23%" $leftMobile="7%" src="images/pessoa.png" />
      <Input
        ref={inputRef}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        type="text"
        placeholder="Insira os nomes do participantes"
      />
      <ButtonForm disabled={!nome}>Adicionar</ButtonForm>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </FormContainer>
  )
}

export default Form
