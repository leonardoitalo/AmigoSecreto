import { useSelector } from 'react-redux'
import { RootState } from 'store'
import {
  Button,
  Card,
  Icon,
  IconButton,
  Text,
  Title,
} from 'styles/GlobalComponents'
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
    <Card $paddingTop="52px">
      <FormDraw onSubmit={draw}>
        <Title>Quem vai tirar o papelzinho?</Title>

        <SelectContainer>
          <Icon
            $top="50%"
            $topMobile="50%"
            $left="89%"
            $leftMobile="87%"
            src="images/triangulo.png"
          />
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

        <IconButton
          $top="59.5%"
          $topMobile="59%"
          $left="35%"
          $height="32px"
          src="images/dado-botao.png"
        />
        <Button $width="227px" $paddingMobile="-1px" $marginBottom="10px">
          Sortear
        </Button>
        {secretFriend && (
          <SelectedName role="alert">{secretFriend}</SelectedName>
        )}
        <img className="desktop-image" src="images/aviao.png" alt="" />
        <img
          className="mobile-image"
          src="images/mobile/aviao-mobile.png"
          alt=""
        />
      </FormDraw>
    </Card>
  )
}

export default DrawPage
