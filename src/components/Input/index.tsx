import * as S from './styles/styles'
import { InputProps } from './types/types'
import cx from 'classnames'

export function Input({ isPasswordField = false, isCpfField = false, isDateBornField, ...props }: InputProps) {
  return(
    <>
      <S.Input { ...props } className={cx(
        { dateBornField: isDateBornField }, 
        { cpfField: isCpfField }
      )} />
    </>
  )
}