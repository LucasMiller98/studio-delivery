import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color?: string
  background?: string

  isContinueButton?: boolean
  isEyesButton?: boolean
  isBackbutton?: boolean
}