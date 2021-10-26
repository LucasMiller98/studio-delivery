import * as S from './styles/styles'
import { ProfileTypes } from './types/types'

export function Profile({ ...props }: ProfileTypes) {
  
  return (
    <>
      { props.isCreateAccount ? (
        <S.Container>
          <S.Image src={ props.image } />
          <S.Span>{ props.text }</S.Span>
        </S.Container>
      ) : (
        <S.Container></S.Container>
      ) }
    </>
  )
}