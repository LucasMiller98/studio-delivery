import styled from 'styled-components'

export const Page = styled.div `
  height: 100vh;
  background: #f1f1f1;
`

export const Container = styled.div `
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1rem;

  height: 269px;
`

export const AnotherDataContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ContainerButtons = styled.div `
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

export const ContainerShowPassword = styled.div `
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  padding-right: 1rem;
`

export const ContainerShowConfirmPassword = styled.div `
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  padding-right: 1rem;
`