import styled from 'styled-components'
import { BaseBorderStyle } from 'styles/GlobalComponents'
import { colors } from 'styles/variablesCss'

interface IconButtonProps {
  hideOnMobile?: boolean
}

export const CardContainer = styled.div`
  background-color: ${colors.cream};
  border-radius: 64px 64px 0 0;
  height: 100vh;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-top: 52px;
`

export const AddParticipantContainer = styled.div`
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

export const StartGameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 142px;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 24px;
  }
`

export const NamesList = styled.ul`
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

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${colors.purple};
`

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
  pointer-events: none; /* Permite clicar no input em vez do ícone */

  @media (max-width: 800px) {
    top: 19%;
  }
`

export const IconButton = styled.img<IconButtonProps>`
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);

  @media (max-width: 800px) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'inline-block')};
  }
`

export const Input = styled(BaseBorderStyle).attrs({ as: 'input' })`
  height: 75px;
  width: 500px;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  padding: 18px 36px 18px 108px;

  @media (max-width: 800px) {
    width: 328px;
    height: 48px;
    border-radius: 32px;
    padding: 0;
    padding-left: 65px;
  }
`

export const ButtonInput = styled(BaseBorderStyle).attrs({ as: 'button' })`
  height: 75px;
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

export const ButtonStart = styled(BaseBorderStyle).attrs({ as: 'button' })`
  width: 351px;
  height: 80px;
  border-radius: 38px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.0125em;
  padding-left: 40px;

  &:hover {
    background-color: ${colors.purple};
  }

  @media (max-width: 800px) {
    width: 155px;
    height: 64px;
    padding: 0px 24px;
    font-size: 16px;
    line-height: 24px;
  }
`

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
