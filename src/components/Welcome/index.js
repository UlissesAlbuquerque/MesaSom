import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from './styles'
import Slider from '../Slider'

const Welcome = () => {
  return (
    <View>
      <Text style={styles.ScreenTitle}>Title</Text>
      <Slider/>
    </View>
  )
}

export default Welcome
