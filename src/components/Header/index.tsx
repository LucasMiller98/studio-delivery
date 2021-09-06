import { Link } from 'react-router-dom'
import * as S from './styles/styles'
import { HeaderProps } from './types/types'
import { FaFacebook, FcGoogle } from 'react-icons/all'
import { Button } from '../../components/Button'

export function Header({ ...props }: HeaderProps) {
  return (
    <>
      { props.isHeaderLogin ? (
        <S.Header>
        <S.Title>{ props.title }</S.Title>
        <S.Span>
          { props.span } 
          <Link to={ props.linkTo }>{props.linkText}</Link>
        </S.Span>

        <S.ContainerButtons>
          <Button
            type='button'
            color='#615B5B'
            background='#fff'
          >
            <FcGoogle size={19.7} />
            { props.buttonChildrenGoogle }
          </Button>

          <Button
            type='button'
            color='#FFFFFF'
            background='#3b5998'
          >
            <FaFacebook size={19.7} />
            { props.buttonChildrenFacebook }
          </Button>
        </S.ContainerButtons>

        <S.Separator>{ props.separatorText }</S.Separator>
      </S.Header>
      ):(

        <S.HeaderRegister>
          <S.TitleRegister>{ props.title }</S.TitleRegister>
          <S.SpanRegister>
            { props.span }  <Link to={ props.linkTo }>{ props.linkText }</Link>
          </S.SpanRegister>
        </S.HeaderRegister>
      ) }
    </>
  )
}