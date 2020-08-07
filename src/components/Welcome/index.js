import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from './styles'
import Slider from '../Slider'

const Welcome = () => {

  const handleSlideValueChange = (value) =>{
    console.log(value);
  }

  return (
    <View style={{display:'flex', flex:1, padding:50, flexDirection:'row'}}>
     <Slider/>
    </View>
  )
}

export default Welcome
