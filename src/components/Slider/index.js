import React from 'react'
import { View } from 'react-native'
import SliderLib from 'react-native-slider'

// import { Container } from './styles';

const Slider = () => {
  return (
    <SliderLib
      style={{
        width: 200,
        height: 40,
      }}
      orientation='vertical'
      minimumValue={0}
      maximumValue={255}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      onValueChange={(value) => {
        console.log(value)
      }}
    />
  )
}

export default Slider
