import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Button, Card, Icon, Text, Title } from 'styles/GlobalComponents'
import { FormDraw, Select, SelectContainer, SelectedName } from './styles'
import { useEffect, useState } from 'react'

const DrawPage = () => {
  const namesList = useSelector((state: RootState) => state.form.currentList)
  const drawnName = useSelector((state: RootState) => state.draw.selectedName)
  const [currentName, setCurrentName] = useState('')
  const [secretFriend, setSecretFriend] = useState('')

  useEffect(() => {
    if (namesList.length > 0) {
      const firstName = namesList[0]
      setCurrentName(firstName)
    }
  }, [namesList, drawnName])

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = drawnName[currentName]
    setSecretFriend(result)
  }

  return (
    <Card>
      <FormDraw onSubmit={draw}>
        <Title>Clique em em sortear para ver quem é seu amigo secreto!</Title>

        <SelectContainer>
          <Icon $top="50%" $left="89%" src="images/triangulo.png" />
          <Select
            $borderRadiusfull="true"
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
        </SelectContainer>

        <Text>
          Clique em em sortear para ver quem é seu <br /> amigo secreto!
        </Text>
        <Button $marginBottom="10px">Sortear</Button>
        {secretFriend && (
          <SelectedName role="alert">{secretFriend}</SelectedName>
        )}
        <img src="images/aviao.png" alt="" />
      </FormDraw>
    </Card>
  )
}

export default DrawPage
