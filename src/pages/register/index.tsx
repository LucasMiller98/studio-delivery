import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input } from '../../components/Input'
import * as S from './styles/styles'
import { Button } from '../../components/Button'
import { BsEyeFill, RiEyeOffFill } from 'react-icons/all'
import { Header } from '../../components/Header'
import { useContextApi } from '../../context/hooks/useContextApi'

export function Register() {
  const { 
    isButtonHiddenState, 
    isConfirmButtonHidden, 
    toggleHiddenConfirmPassword, 
    toggleHiddenPassword 
  } = useContextApi()
  
  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [dateBorn, setDateBorn] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleBack = () => {
    history.back()
  }
  
  return (
    <>
      <S.Page>
        <S.Container>

          <Header 
            title='Criar uma conta'
            span='Já tem uma conta?'
            linkText='Faça login'
            linkTo='/login'
          />

          <S.Form onSubmit={handleSubmit}>
            <Input 
              onChange={event => setName(event.target.value)}
              placeholder='Nome completo'
              type='text'
              value={name}
            />

            <S.AnotherDataContainer>
              <Input 
                onChange={event => setDateBorn(event.target.value)}
                value={dateBorn}
                placeholder='Data de nascimento'
                type='text'
                isDateBornField
              />

              <Input 
                onChange={event => setCPF(event.target.value)}
                value={cpf}
                placeholder='CPF'
                type='text'
                isCpfField
              />
            </S.AnotherDataContainer>

            <Input 
              onChange={event => setPhone(event.target.value)}
              value={phone}
              placeholder='Celular'
              type='number'
            />

            <Input 
              onChange={event => setEmail(event.target.value)}
              value={email}
              placeholder='E-mail'
              type='email'
            />
            <S.ContainerShowPassword>
              <Input 
                onChange={event => setPassword(event.target.value)}
                value={password}
                maxLength={8}
                placeholder='Senha'
                type={ isButtonHiddenState ? 'text': 'password' }
                isPasswordField
              />
              <Button 
                type='button'
                onClick={() =>
                  toggleHiddenPassword(isButtonHiddenState)
                }
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
            </S.ContainerShowPassword>
            <S.ContainerShowConfirmPassword>
              <Input 
                onChange={event => setConfirmPassword(event.target.value)}
                value={confirmPassword}
                maxLength={8}
                placeholder='Repetir a senha'
                type={ isConfirmButtonHidden ? 'text': 'password' }
              />
              <Button
                type='button'
                isEyesButton
                isContinueButton={false}
                onClick={() => 
                  toggleHiddenConfirmPassword(isConfirmButtonHidden)
                }>
                { isConfirmButtonHidden ? (
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
            </S.ContainerShowConfirmPassword>

            <S.ContainerButtons>
              <Button
                onClick={handleBack}
                type='button'
                color='#fff'
                background='rgba(78, 70, 180, .5)'
                isBackbutton
              >
                Voltar
              </Button>

              <Button
                style={{ 
                  marginTop: 0, 
                  background: '#4e46b4', 
                  color:'#fff', 
                  width: '83.2%'
                }}
                type='submit'
                isContinueButton
                disabled={
                  name.trim() === '' ||
                  dateBorn.trim() === '' ||
                  cpf.trim() === '' ||
                  phone.trim() === '' ||
                  email.trim() === '' ||
                  password.trim() === '' ||
                  password.trim().length < 8 ||
                  confirmPassword.trim() === '' || 
                  confirmPassword.trim().length < 8 ? 
                  true : false
                }
              >
                Continuar
              </Button>
            </S.ContainerButtons>
          </S.Form>
        </S.Container>
      </S.Page>
    </>
  )
}