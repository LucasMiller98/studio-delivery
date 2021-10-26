import { Button } from "../Button";
import { Input } from "../Input";
import * as S from './styles/styles'
import { FormEvent, useState } from "react";
import { useHistory } from 'react-router-dom'
import { BsEyeFill } from 'react-icons/bs'
import { RiEyeOffFill } from 'react-icons/ri'
import { useContextApi } from '../../context/hooks/useContextApi';
import { FormProps } from './types/types'

export function Form({isFormLogin}: FormProps) {

  const { 
    toggleHiddenConfirmPassword, 
    toggleHiddenPassword, 
    isButtonHiddenState, 
    isConfirmButtonHidden 
  } = useContextApi()

  const [name, setName] = useState('')
  const [cpf, setCPF] = useState('')
  const [dateBorn, setDateBorn] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [isFormLogin, setIsFormLogin] = useState(false)
  
  const history = useHistory()
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleBack = () => {
    history.push('/login')
  }
  
  return(
    <>
      {/* { isFormLogin ? (
        <S.Form onSubmit={handleSubmit}>
          <Input
            autoComplete='off'
            name='email'
            value={email} 
            onChange={event => setEmail(event.target.value)}
            placeholder='E-mail'
            type='text'
          />
          <S.ContainerPasswordField>
            <Input
              autoComplete='off'
              name='password'
              value={password} 
              onChange={event => setPassword(event.target.value)}
              placeholder='Senha'
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
      ): (

        <S.Form onSubmit={handleSubmit}>
          <Input
            autoComplete='off' 
            onChange={(event) => setName(event.target.value)}
            placeholder='Nome completo'
            type='text'
            value={name}
            name='name'
          />

          <S.AnotherDataContainer>
            <Input
              autoComplete='off' 
              name='deteBorn'
              onChange={event => setDateBorn(event.target.value)}
              value={dateBorn}
              placeholder='Data de nascimento'
              type='text'
              isDateBornField
            />

            <Input
              autoComplete='off' 
              name='cpf'
              onChange={event => setCPF(event.target.value)}
              value={cpf}
              placeholder='CPF'
              type='text'
              isCpfField
            />
          </S.AnotherDataContainer>

          <Input
            autoComplete='off' 
            name='phone'
            onChange={event => setPhone(event.target.value)}
            value={phone}
            placeholder='Celular'
            type='number'
          />

          <Input
            autoComplete='off' 
            name='email'
            onChange={event => setEmail(event.target.value)}
            value={email}
            placeholder='E-mail'
            type='email'
          />
          <S.ContainerShowPassword>
            <Input
              autoComplete='off' 
              name='password'
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
              autoComplete='off' 
              name='confirmPassword'
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
      ) } */}
    </>
  )
}