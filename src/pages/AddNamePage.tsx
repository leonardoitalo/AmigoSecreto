import Form from 'components/Form'
import Header from 'components/Header'
import NamesList from 'components/NamesList'
import {
  Button,
  Card,
  IconButton,
  StartGameContainer,
  Title,
} from 'styles/GlobalComponents'

const AddNamePage = () => {
  return (
    <>
      <Header />
      <Card>
        <Title>Vamos começar!</Title>
        <Form />
        <NamesList />
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
