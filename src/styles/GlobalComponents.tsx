import { IconButtonProps } from 'interfaces/IconButtonProps'
import styled from 'styled-components'
import { colors } from './variablesCss'
import { CardContainerProps } from 'interfaces/CardContainerProps'
import { InputProps } from 'interfaces/InputProps'
import { IconProps } from 'interfaces/IconProps'
import { ButtonProps } from 'interfaces/ButtonProps'

export const BaseBorderStyle = styled.div`
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px 1px rgba(0, 0, 0, 1);
`

export const Card = styled.section<CardContainerProps>`
  background-color: ${colors.cream};
  border-radius: 64px 64px 0 0;
  height: 100vh;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-top: ${({ $paddingTop }) => $paddingTop || '86px'};
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${colors.purple};

  @media (max-width: 800px) {
    font-size: 20px;
  }
`

export const Input = styled(BaseBorderStyle).attrs<InputProps>({
  as: 'input',
})`
  height: 75px;
  width: 500px;
  border-radius: ${({ $borderRadiusfull }) =>
    $borderRadiusfull === 'true' ? '32px' : '0'};
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

export const Button = styled(BaseBorderStyle).attrs<ButtonProps>({
  as: 'button',
})`
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
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};

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

export const Icon = styled.img<IconProps>`
  position: absolute;
  top: ${({ $top }) => $top || '50%'};
  left: ${({ $left }) => $left || '7%'};
  transform: translateY(-50%);
  pointer-events: none; /* Permite clicar no input em vez do ícone */
  cursor: pointer;

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
    display: ${({ $hideOMobile }) => ($hideOMobile ? 'none' : 'inline-block')};
  }
`
export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  line-height: 30px;
  color: ${colors.grayDark};
`
