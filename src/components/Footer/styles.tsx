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
`
