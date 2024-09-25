import {
  AddParticipantContainer,
  ButtonInput,
  ButtonStart,
  CardContainer,
  Icon,
  IconButton,
  Input,
  NamesList,
  StartGameContainer,
  Title,
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <Title>Vamos começar!</Title>
      <AddParticipantContainer>
        <Icon src="images/pessoa.png" />
        <Input type="text" placeholder="Insira os nomes dos participantes" />
        <ButtonInput>Adicionar</ButtonInput>
      </AddParticipantContainer>
      <NamesList>
        <li>João</li>
        <li>Maria</li>
        <li>José</li>
        <li>Lúcia</li>
      </NamesList>
      <StartGameContainer>
        <IconButton hideOnMobile src="images/play-icone.png" />
        <ButtonStart>Iniciar brincadeira!</ButtonStart>
        <img src="images/sacola.png" alt="" />
      </StartGameContainer>
    </CardContainer>
  )
}

export default Card
