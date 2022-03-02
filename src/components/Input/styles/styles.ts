import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  position: relative;

  > label {
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 12px;
    
    transition: top 400ms, font 400ms;
  }
  
  > input:focus + label, 
  > input:not(:placeholder-shown) + label {
    font-size: 10px;
    top: 0;
    color: #999ca0;
    background: #fff;
  }

  > input:not(:focus)::placeholder { // quando o input tiver em focus o placeholder não deve aparecer
    opacity: 0;
  }
`

export const Label = styled.label `
  color: #000;
  font-weight: normal;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
`

export const Input = styled.input `  
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

  &.largerField { 
    width: 100%;
  }

  &.passwordField {
    background: transparent;
  }

  &.dateBornField {
    flex: 4;
  }

  &.cpfField {
    flex: 2;
    width: 100%;
  }
`
