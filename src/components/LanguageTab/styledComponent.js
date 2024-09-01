import styled from 'styled-components'

export const LiEle = styled.li`
  list-style-type: none;
  margin: 0 10px;
`

export const ButtonEle = styled.button`
  cursor: pointer;
  padding: 6px 24px;
  border-radius: 5px;
  border: 1px solid #db1c48;
  outline: none;
  color: ${props => (props.isActive ? '#fff' : '#db1c48')};
  background-color: ${props => (props.isActive ? '#db1c48' : '#fff')};
`
