import styled from 'styled-components'

export const Page = styled.div `
  height: 100vh;
  background: #f1f1f1;
`

export const Container = styled.div `
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

export const Form = styled.form `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  position: absolute;
  bottom: 0;
  margin-bottom: 8rem;
  
`

export const ContainerFormButtons = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: .7rem;
  margin-top: 1rem;
`

export const ContainerTitles = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const TitleH3 = styled.h3 `
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #000;
`

export const TitleH5 = styled.h5 `
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  color: #999ca0;
`