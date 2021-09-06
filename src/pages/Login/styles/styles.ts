import styled from 'styled-components'

export const Page = styled.div `
  width: 100vw;
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

export const Header = styled.header `
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  justify-content: center;
  flex-direction: column;
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

export const Form = styled.form `
  display: flex;
  width: 80%;
  align-items: flex-end; 
  flex-direction: column;
  gap: 1rem;
`

export const ContainerPasswordField = styled.div `
  background: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 12px;

  padding-right: 1rem;
`