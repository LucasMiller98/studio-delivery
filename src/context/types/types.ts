import { ReactNode } from 'react'

export type ContextTypes = {
  isButtonHiddenState: boolean
  isConfirmButtonHidden: boolean
  isContinueButton: boolean

  toggleHiddenPassword: (isButtonHidden: boolean) => void
  toggleHiddenConfirmPassword: (isButtonConfirmPassword: boolean) => void
}

export type ProviderProps = {
  children: ReactNode
}