import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 24.75px;
  position: relative;
`

export const Span = styled.span `
  position: absolute;
  width: 83px;
  bottom: -116.88%;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  
  color: #4e46b4;
`

export const Image = styled.img `
  position: absolute;
  width: 132px;
  height: 132px;
  top: -57px;
  background-color: rgba(78, 70, 180, .5);
  border-radius: 206.25px;
`