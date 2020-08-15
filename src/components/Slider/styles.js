import styled from 'styled-components/native'

// Area de visualização dos Sliders
export const Container = styled.View`
  display: flex;
  flex: 1;
  margin:20px;
  align-Items: center;
`

// Trilho do Slider
export const Trail = styled.View`
  /* margin: 60px; */
  height:90%;
  width: 5px;
  background-color: gray;
  border-width: 1px;
  border-radius: 2px;
  border-color: gray;
  border-bottom-width: 0px;
`
// Indicador do Slider
export const Indicator = styled.View`
  height: ${(props) => props.size*0.5}px;
  width: ${(props) => props.size}px;
  background-color: #222d32;
  align-self: center;
  border-radius: ${(props) => props.size / 2}px; 
`
