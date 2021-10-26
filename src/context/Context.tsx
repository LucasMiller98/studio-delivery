import { createContext, useState } from 'react'
import { ProviderProps, ContextTypes } from './types/types'

export const Context = createContext({} as ContextTypes)

export const ContextProvider = ({ children }: ProviderProps) => {

  
  const [isButtonHiddenState, setIsButtonHiddenState] = useState(false)
  const [isConfirmButtonHidden, setIsConfirmButtonHidden] = useState(false)

  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [dateBorn, setDateBorn] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
      name,
      dateBorn,
      cpf,
      confirmPassword,
      email,
      password,
      phone,
    }}>
      { children }
    </Context.Provider>
  )
}