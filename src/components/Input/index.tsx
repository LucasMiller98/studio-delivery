import * as S from './styles/styles'
import { InputProps } from './types/types'
import cx from 'classnames'

export function Input({ 
  isPasswordField = false, 
  isLargerField = false, 
  isCpfField = false, 
  isDateBornField,
  onKeyUp,
  ...props }: InputProps) {

  
  return(
    <>
      <S.Container>
        <S.Input onKeyUp={onKeyUp} { ...props } className={cx(
          { dateBornField: isDateBornField },
          { cpfField: isCpfField },
          { largerField: isLargerField }
          )} />
        <S.Label htmlFor={ props.htmlFor }>{ props.label }</S.Label>
      </S.Container>
    </>
  )
}