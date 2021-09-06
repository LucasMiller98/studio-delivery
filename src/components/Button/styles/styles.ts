import styled from 'styled-components'

export const Button = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  width: 284px;
  height: 42px;
  border-radius: 10px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  border: 1px solid transparent;
  font-size: 12px;
  line-height: 18px;

  &.continue {
    margin-top: 1.7rem;
    width: 137px;
    padding: 8px 16px;
    border-radius: 8px;

    &:disabled {
      opacity: .29;
      cursor: not-allowed;
    }
  }

  &.eyesButton {
    display: flex;
    justify-content: flex-end;
    border: 0;
    background: #fff;
    width: 8%;
    height: 8%;
  }
`