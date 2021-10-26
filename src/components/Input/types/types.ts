
export type InputProps = {
  value?: string
  autoComplete: string
  placeholder: string
  type: string
  label?: string
  htmlFor?: string

  isLargerField?: boolean
  
  onChange: (event: any) => void
  onKeyUp?: () => void

  isPasswordField?: boolean
  isDateBornField?: boolean
  isCpfField?: boolean
  maxLength?: number
}