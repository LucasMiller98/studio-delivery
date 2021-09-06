import * as S from './styles/styles'
import { ButtonProps } from './types/types'
import cx from 'classnames'

export function Button({ 
  color, 
  background, 
  isContinueButton = false, 
  isEyesButton = false, 
  isBackbutton = false,
  children,
  ...props }: ButtonProps) {
  
  return (
    <>
      <S.Button 
        className={cx(
          { continue: isContinueButton },
          { eyesButton: isEyesButton },
          { backButton: isBackbutton }
        )}
        style={{ color: color, background: background }} 
        { ...props }
      >
        { children }
      </S.Button>
    </>
  )
}
