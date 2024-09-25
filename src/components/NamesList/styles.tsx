import styled from 'styled-components'
import { colors } from 'styles/variablesCss'

export const NamesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: ${colors.grayDark};
  }

  @media (max-width: 800px) {
    margin: -14px 0;
  }
`
