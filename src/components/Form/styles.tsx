import styled from 'styled-components'
import { BaseBorderStyle } from 'styles/GlobalComponents'
import { colors } from 'styles/variablesCss'

export const FormContainer = styled.form`
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

export const ButtonForm = styled(BaseBorderStyle).attrs({ as: 'button' })`
  height: 76px;
  width: 227px;
  border-top-right-radius: 38px;
  border-bottom-right-radius: 38px;
  background-color: ${colors.gray};

  @media (max-width: 800px) {
    width: 155px;
    height: 48px;
    border-radius: 38px;
  }
`
