import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { addParticipant } from 'store/Form/slice'

const Form = () => {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const errorMessage = useSelector((state: RootState) => state.form.error)
  const dispatch = useDispatch()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(addParticipant(nome))
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        type="text"
        placeholder="Insira os nomes do participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  )
}

export default Form
