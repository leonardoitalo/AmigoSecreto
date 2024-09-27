import { HeaderContainer, ImageLogo, ImageParticipant } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <ImageLogo />
      <ImageParticipant
        className="desktop-image"
        src="images/participante.png"
        alt=""
      />
      <ImageParticipant
        className="mobile-image"
        src="images/mobile/participante-mobile.png"
        alt=""
      />
    </HeaderContainer>
  )
}

export default Header
