import styled from 'styled-components'

export const Header = styled.header `
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  justify-content: center;
  flex-direction: column;
  width: 40vh;
  height: 57%;
`

export const Title = styled.h1 `
  font-size: 24px;
  font-weight: bold;
  color: #000;
`

export const Span = styled.span `
  font-weight: 500;
  font-size: 11px;
  color: #999ca0;

  display: flex;
  gap: 5px;
  
  a {
    text-decoration: none;
    font-weight: 600;
    color: #6969B3;
  }
`

export const ContainerButtons = styled.div `
  margin-top: 3.7rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Separator = styled.div `
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin-bottom: 1.7rem;

  color: rgba(0, 0, 0, 0.21);

  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.21);
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.21);
    margin-left: 16px;
  }
`

export const HeaderRegister = styled.header `
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  justify-content: center;
  flex-direction: column;
`

export const TitleRegister = styled.h1 `
  position: absolute;
  width: 203px;
  left: 37px;
  top: 5.31%;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  color: #000;
`

export const SpanRegister = styled.span `
  position: absolute;
  width: 170px;
  left: 37px;
  top: 10.62%;

  font-family: 'Poppins', sans-serif;
  font-style: normal; 
  font-weight: 500;
  font-size: 11px;

  color: #999ca0;

  a {
    text-decoration: none;
    font-weight: 600;
    color: #6969b3;
  }
`