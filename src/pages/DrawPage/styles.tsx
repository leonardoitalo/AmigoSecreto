import styled from 'styled-components'
import { Input } from 'styles/GlobalComponents'
import { colors } from 'styles/variablesCss'

export const FormDraw = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  position: relative;

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

export const SelectContainer = styled.div`
  position: relative;
`

export const Select = styled(Input).attrs({ as: 'select' })`
  appearance: none;
`

export const SelectedName = styled.span`
  font-size: 25px;
  font-weight: 400;
  line-height: 38px;
  color: ${colors.orange};
`
