import * as S from './styles/styles'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import Image from '../../images/Delivery-Cristina.jpg'

export function RegisterSettingAccount() {

  const changeText = {
    addPhoto: 'Adicionar foto',
    removePhoto: 'Remover foto'
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
        </S.Container>
      </S.Page>
    </>
  )
}