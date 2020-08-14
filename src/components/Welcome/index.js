import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, ActivityIndicator } from 'react-native'

import styles from './styles'
import Slider from '../Slider'
import reactotron from 'reactotron-react-native'
import { getChannels, postChannels } from '../../services/channels'
import lodash from 'lodash'

const Welcome = () => {
  const [channels, setChannels] = useState(null)

  const handleSlideValueChange = (value, channel) => {
    let newChannels = channels
    newChannels[channel] = parseInt(value)
    setChannels(newChannels)
    handlePostChannels(newChannels)
  }

  const debouncedValueChange = lodash.debounce(handleSlideValueChange, 100)

  const handleGetChannels = async () => {
    let response = await getChannels()
    setChannels(response)
  }

  const handlePostChannels = async (newChannels) => {
    let response = await postChannels(newChannels)
  }


  useEffect(() => {
    handleGetChannels()
  }, [])

  if (!channels) {
    return <View style={{
      flex:1,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <ActivityIndicator size="large" color={'blue'}/>
      <Text>Loading</Text>
    </View>
  }

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        display: 'flex',
        flexGrow: 1,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {Object.keys(channels).map((channel, index) => {
        return (
          <Slider
            key={index}
            onValueChange={(value) => debouncedValueChange(value, channel)}
            initialValue={channels[channel]}
          />
        )
      })}
    </ScrollView>
  )
}

export default Welcome
