import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $width: string
  $marginBottom?: string
  $paddingMobile?: string
}
