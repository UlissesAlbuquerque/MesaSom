import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex: 1;
  margin:50px;
`

export const Trail = styled.View`
  /* margin: 60px; */
  height:100%;
  width: 3px;
  background-color: grey;
  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 0px;
`

export const Indicator = styled.View`
  height: ${(props) => props.size*0.5}px;
  width: ${(props) => props.size}px;
  background-color: #757575;
  align-self: center;
  /* border-radius: ${(props) => props.size / 2}px; */
`
