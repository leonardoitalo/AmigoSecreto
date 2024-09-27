import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 142px;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 24px;
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
