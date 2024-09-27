import styled from 'styled-components'
import { Input } from 'styles/GlobalComponents'
import { colors } from 'styles/variablesCss'

export const FormDraw = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
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
