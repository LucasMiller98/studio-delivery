import * as S from './styles/styles'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import Image from '../../images/Delivery-Cristina.jpg'
import { Input } from '../../components/Input'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export function RegisterSettingAccount() {
  const [name, setName] = useState<string>('')
  const navigate = useNavigate()

  const changeText = {
    addPhoto: 'Adicionar foto',
    removePhoto: 'Remover foto'
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleBack = () => {
    navigate('/cadastre-se')
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
          
          <Profile 
            image={Image}
            text={ changeText.removePhoto }
            isCreateAccount
          />

          <S.Form onSubmit={handleSubmit}>
            <S.ContainerTitles>
              <S.TitleH3>Como gostaria de ser chamado?</S.TitleH3>
              <S.TitleH5>Escreva abaixo sua preferência</S.TitleH5>
            </S.ContainerTitles>

            <Input 
              autoComplete='off'
              placeholder=' '
              htmlFor='name'
              type='text'
              onChange={event => setName(event.target.value)}
              label='Nome'
              value={name}
            />

            <S.ContainerFormButtons>
              <Button
                type='button'
                onClick={handleBack}
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
                  name.trim() === '' ? true : false
                }
              >
                Continuar
              </Button>
            </S.ContainerFormButtons>

          </S.Form>
        </S.Container>
      </S.Page>
    </>
  )
}