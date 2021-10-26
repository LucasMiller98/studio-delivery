import { ReactNode } from 'react'

export type ContextTypes = {
  isButtonHiddenState: boolean
  isConfirmButtonHidden: boolean
  name: string
  dateBorn: string
  cpf: string
  phone: string
  email: string
  password: string
  confirmPassword: string

  toggleHiddenPassword: (isButtonHidden: boolean) => void
  toggleHiddenConfirmPassword: (isButtonConfirmPassword: boolean) => void
}

export type ProviderProps = {
  children: ReactNode
}