import { createContext, useState } from 'react'
import { ProviderProps, ContextTypes } from './types/types'

export const Context = createContext({} as ContextTypes)

export const ContextProvider = ({ children }: ProviderProps) => {

  const [isButtonHiddenState, setIsButtonHiddenState] = useState(false)
  const [isConfirmButtonHidden, setIsConfirmButtonHidden] = useState(false)

  const isContinueButton = false
  
  const toggleHiddenPassword = (isButtonHidden: boolean) => {
    setIsButtonHiddenState(!isButtonHidden)
  }

  const toggleHiddenConfirmPassword = (isButtonConfirmPassword: boolean) => {
    setIsConfirmButtonHidden(!isButtonConfirmPassword)
  }
  
  return (
    <Context.Provider value={{
      isButtonHiddenState,
      toggleHiddenPassword,
      toggleHiddenConfirmPassword,
      isConfirmButtonHidden,
      isContinueButton,
    }}>
      { children }
    </Context.Provider>
  )
}