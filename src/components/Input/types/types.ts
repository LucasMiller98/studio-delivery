
export type InputProps = {
  value: string
  placeholder: string
  type: string
  onChange: (event: any) => void

  isPasswordField?: boolean
  isDateBornField?: boolean
  isCpfField?: boolean
  maxLength?: number
}