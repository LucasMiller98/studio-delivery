import styled from 'styled-components'

export const Input = styled.input `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  padding: 15.7px 16px;
  background: #fff;
  border-radius: 12px;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #000;
  border: 0;
  width: 100%;

  &::placeholder {
    color: #000;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 12px;
  }

  &.passwordField {
    background: transparent;
  }

  &.dateBornField {
    flex: 4;
  }

  &.cpfField {
    flex: 2;
  }
`
