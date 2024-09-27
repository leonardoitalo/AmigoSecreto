import styled from 'styled-components'
import { colors } from 'styles/variablesCss'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  background: ${colors.purple};
  padding-top: 120px;

  @media screen and (max-width: 940px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }

  img.desktop-image {
    display: block;

    @media (max-width: 800px) {
      display: none;
    }
  }

  // Mostra a imagem no mobile
  img.mobile-image {
    display: none;

    @media (max-width: 800px) {
      display: block;
    }
  }
`

export const ImageLogo = styled.div`
  background-image: url('images/dado-logo.png');
  background-repeat: no-repeat;
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    background-image: url('images/dado-logo-sm.png');
    width: 235px;
    height: 199px;
    margin-left: 50px;
  }
`

export const ImageParticipant = styled.img`
  z-index: 1;
  height: 277px;
`
