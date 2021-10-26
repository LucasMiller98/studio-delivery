import { FormEvent, useState } from 'react'
import { Button } from '../../components/Button'
import * as S from './styles/styles'
import { BsEyeFill, RiEyeOffFill } from 'react-icons/all'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { useContextApi } from '../../context/hooks/useContextApi'

export function Login() {
  const { 
    toggleHiddenPassword,
    isButtonHiddenState
   } = useContextApi()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  
  return(
    <>
      <S.Page>
        <S.Container>
          
          <Header 
            title='Fazer login'
            span='Novo usuário?'
            linkText='Crie uma conta'
            linkTo='/cadastre-se'
            buttonChildrenGoogle='Continuar com o Google'
            buttonChildrenFacebook='Continuar com o Facebook'
            separatorText='ou'
            isHeaderLogin
          />

          <S.Form onSubmit={handleSubmit}>
            <Input
              htmlFor='email'
              label='E-mail'
              autoComplete='off'
              value={email} 
              onChange={event => setEmail(event.target.value)}
              placeholder=' '
              type='text'
              isLargerField
            />

            <S.ContainerPasswordField>
              <Input
                htmlFor='password'
                label='Senha'
                autoComplete='off'
                value={password} 
                onChange={event => setPassword(event.target.value)}
                placeholder=' '
                maxLength={8}
                type={isButtonHiddenState ? 'text': 'password'}
                isPasswordField
              />
              <Button 
                type='button' 
                onClick={() => 
                toggleHiddenPassword(isButtonHiddenState)}
                isContinueButton={false}
                isEyesButton
              >
                { isButtonHiddenState ? (
                  <BsEyeFill
                    size={20} 
                    color='#000' 
                  />
                ) : (
                  <RiEyeOffFill 
                    size={20} 
                    color='#000' 
                  />
                ) }
              </Button>
            </S.ContainerPasswordField>
            <Button
              background='#3b5998'
              color='#fff'
              type='submit'
              isContinueButton
              disabled={
                password.trim() === '' || 
                email.trim() === '' || 
                password.trim().length < 8 ? 
                true: false
              }>
              Continuar
            </Button>
          </S.Form>
        </S.Container>
      </S.Page>
    </>
  )
}