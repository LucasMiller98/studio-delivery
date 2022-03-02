import { FormEvent, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import * as S from './styles/styles'
import { Button } from '../../components/Button'
import { BsEyeFill, RiEyeOffFill } from 'react-icons/all'
import { Header } from '../../components/Header'
import { useContextApi } from '../../context/hooks/useContextApi'
import { Form } from '../../components/Form/index'

export function Register() {

  const { 
    isButtonHiddenState, 
    isConfirmButtonHidden, 
    toggleHiddenConfirmPassword, 
    toggleHiddenPassword,
  } = useContextApi()
  
  // const [cpf, setCPF] = useState('')
  
  // const [name, setName] = useState('')
  // const [dateBorn, setDateBorn] = useState('')
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const navigate = useNavigate()

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault()
    
  //   navigate('/cadastre-se/account')

  //   handleValidateCPF(cpf)
  // }

  // const handleMaskInptCpf = (cpf: any) => {

  //   cpf = document.getElementsByTagName('input')[2]

  //   if(cpf.value.length === 3 || cpf.value.length === 7) {
  //     cpf.value += '.'
  //   }

  //   if(cpf.value.length === 11) {
  //     cpf.value += '-'
  //   }
  // }

  // const handleValidateCPF = (cpf: string) => {
    
  //   if(typeof cpf !== 'string') return false
    
  //   cpf = cpf.replace(/[\s.-]*/igm, '')

  //   if(cpf.length != 11 || 
  //     cpf == '00000000000' || 
  //     cpf == '11111111111' || 
  //     cpf == '22222222222' || 
  //     cpf == '33333333333' || 
  //     cpf == '44444444444' || 
  //     cpf == '55555555555' || 
  //     cpf == '66666666666' || 
  //     cpf == '77777777777' || 
  //     cpf == '88888888888' || 
  //     cpf == '99999999999') {

  //       return false
  //   }

  //   let soma = 0
  //   let resto = 0

  //   for(let i = 1; i <= 9; i++) {
  //     soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
  //   }

  //   resto = (soma * 10) % 11

  //   if((resto == 10) || (resto == 11)) {
  //     resto = 0
  //   }

  //   if(resto != parseInt(cpf.substring(9, 10))) {
  //     return false
  //   }

  //   soma = 0

  //   for(let i = 1; i <= 10; i++) {
  //     soma += parseInt(cpf.substring(i - 1, i)) * (12 - i)
  //   }

  //   resto = (soma * 10) % 11
  //   console.log(resto)

  //   if((resto === 10) || (resto === 11)) {
  //     resto = 0
  //   }

  //   if(resto != parseInt(cpf.substring(10, 11))) {
  //     return false
  //   }

  //   return true
  // }

  // const handleMaskDateBorn = (dateBorn: any) => {
  //   dateBorn = document.getElementsByTagName('input')[1]

  //   if(dateBorn.value.length === 2 || dateBorn.value.length === 5) {
  //     dateBorn.value += '/'
  //   }
  // }

  // const handleMaskCellPhone = (phone: any) => {
    
  //   phone = document.getElementsByTagName('input')[3]
  //   console.log(phone)

  //   // if(phone.value[0]) {
  //   //   phone.value += phone.value.replace(phone.value[0], '')
  //   // }
    
  //   if(phone.value.length === 1) {
  //     phone.value += '('
  //   }

  //   if(phone.value.length === 4) {
  //     phone.value += ')'
  //   }

  //   if(phone.value.length === 6) {
  //     phone.value += ' '
  //   }

  //   if(phone.value.length === 11) {
  //     phone.value += '-'
  //   }
  // }
  
  // const handleBack = () => {
  //   navigate('/login')
  // }
  
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

          <Form />

          {/* <S.Form onSubmit={handleSubmit}>
            <Input
              autoComplete='off' 
              onChange={(event) => setName(event.target.value)}
              placeholder=' '
              type='text'
              value={name}
              isLargerField
              htmlFor='name'
              label='Nome completo'
            />

            <S.AnotherDataContainer>
              <Input
                autoComplete='off' 
                onChange={event => setDateBorn(event.target.value)}
                value={dateBorn}
                placeholder=' '
                htmlFor='dateBorn'
                label='Data de nascimento'
                type='text'
                isDateBornField
                onKeyUp={() => handleMaskDateBorn(dateBorn)}
                maxLength={10}
              />

              <Input
                autoComplete='off' 
                onChange={event => setCPF(event.target.value)}
                maxLength={14}
                value={cpf}
                placeholder=' '
                htmlFor='cpf'
                label='CPF'
                type='text'
                isCpfField
                onKeyUp={() => handleMaskInptCpf(cpf)}
              />
            </S.AnotherDataContainer>

            <Input
              autoComplete='off' 
              onChange={event => setPhone(event.target.value)}
              value={phone}
              placeholder=' '
              htmlFor='phone'
              label='Celular'
              type='text'
              isLargerField
              onKeyUp={() => handleMaskCellPhone(phone)}
              maxLength={16}
            />

            <Input
              autoComplete='off' 
              onChange={event => setEmail(event.target.value)}
              value={email}
              placeholder=' '
              htmlFor='email'
              label='E-mail'
              type='email'
              isLargerField
            />

            <S.ContainerShowPassword>
              <Input
                autoComplete='off' 
                onChange={event => setPassword(event.target.value)}
                value={password}
                maxLength={8}
                placeholder=' '
                htmlFor='password'
                label='Senha'
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
                onChange={event => setConfirmPassword(event.target.value)}
                value={confirmPassword}
                maxLength={8}
                placeholder=' '
                htmlFor='confirmPassword'
                label='Repetir a senha'
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
          </S.Form> */}
        </S.Container>
      </S.Page>
    </>
  )
}