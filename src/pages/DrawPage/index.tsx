import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const DrawPage = () => {
  const namesList = useSelector((state: RootState) => state.form.currentList)
  const drawnName = useSelector((state: RootState) => state.draw.selectedName)
  const [currentName, setCurrentName] = useState('')
  const [secretFriend, setSecretFriend] = useState('')

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = drawnName[currentName]
    setSecretFriend(result) // Atualiza o estado do amigo secret
  }

  return (
    <section>
      <form onSubmit={draw}>
        <select
          role="combobox"
          required
          name="currentName"
          id="currentName"
          aria-placeholder="Selecione o seu nome"
          value={currentName}
          onChange={(event) => {
            setCurrentName(event.target.value)
          }}
        >
          {namesList.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {secretFriend && <p role="alert">{secretFriend}</p>}
    </section>
  )
}

export default DrawPage
