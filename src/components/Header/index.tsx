import { HeaderContainer, ImageLogo, ImageParticipant } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <ImageLogo />
      <ImageParticipant src="images/pessoa.png" alt="" />
    </HeaderContainer>
  )
}

export default Header
