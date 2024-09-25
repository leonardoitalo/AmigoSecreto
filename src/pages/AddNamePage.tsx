import Form from 'components/Form'
import Header from 'components/Header'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import {
  Button,
  Card,
  IconButton,
  NamesList,
  StartGameContainer,
  Title,
} from 'styles/GlobalComponents'

const AddNamePage = () => {
  const namesList = useSelector((state: RootState) => state.form.currentList)
  return (
    <>
      <Header />
      <Card>
        <Title>Vamos começar!</Title>
        <Form />
        <NamesList>
          {namesList.map((name) => (
            <li>{name}</li>
          ))}
        </NamesList>
        <StartGameContainer>
          <IconButton hideOnMobile src="images/play-icone.png" />
          <Button>Iniciar brincadeira!</Button>
          <img src="images/sacola.png" alt="" />
        </StartGameContainer>
      </Card>
    </>
  )
}

export default AddNamePage
