import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Button, Card, Icon, Text, Title } from 'styles/GlobalComponents'
import { FormDraw, Select, SelectedName } from './styles'
import { FormContainer } from 'components/Form/styles'

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
    <Card>
      <FormDraw onSubmit={draw}>
        <Title>Clique em em sortear para ver quem é seu amigo secreto!</Title>

        <FormContainer>
          <Icon $top="50%" $left="89%" src="images/triangulo.png" />
          <Select
            $borderradiusfull="true"
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
          </Select>
        </FormContainer>

        <Text>
          Clique em em sortear para ver quem é seu <br /> amigo secreto!
        </Text>
        <Button $marginbottom="10px">Sortear</Button>
        {secretFriend && (
          <SelectedName role="alert">{secretFriend}</SelectedName>
        )}
        <img src="images/aviao.png" alt="" />
      </FormDraw>
    </Card>
  )
}

export default DrawPage
