import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, ActivityIndicator, Alert } from 'react-native'

import styles from './styles'
import Slider from '../Slider'
import reactotron from 'reactotron-react-native'
import { getChannels, postChannels } from '../../services/channels'
import lodash from 'lodash'

// Tela do Slider
const Welcome = () => {

  // Canais
  const [channels, setChannels] = useState(null)

  // Atualiza posição do slider  
  const handleSlideValueChange = (value, channel) => {
    let newChannels = channels
    newChannels[channel] = parseInt(value)
    setChannels(newChannels)
    handlePostChannels(newChannels)
  }

  // Tempo de atualização do Slider
  const debouncedValueChange = lodash.debounce(handleSlideValueChange, 30)

  // Get para posicionamento inicial do Slider conforme valor no Servidor
  const handleGetChannels = async () => {
    let response = await getChannels()
    setChannels(response)
  }

  // Post para escrita do novo valor do Slider no Servidor
  const handlePostChannels = async (newChannels) => {
    let response = await postChannels(newChannels)
  }

  // Primeiro Get
  useEffect(() => {
    handleGetChannels()
  }, [])

  // Carregando Slider enquanto Servidor responde
  if (!channels) {
    return <View style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator size="large" color={'blue'} />
      <Text>Aguardando conexão com a mesa de som</Text>
    </View>
  }

  // Visualização do Slider
  // Carrega quantidade de Sliders conforme necessário
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        display: 'flex',
        flexGrow: 1,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d2d6de'
      }}
    >
      {Object.keys(channels).map((channel, index) => {
        return (
          <Slider
            key={index}
            onValueChange={(value) => debouncedValueChange(value, channel)}
            initialValue={channels[channel]}
            chName={channel}
          />
        )
      })}
    </ScrollView>
  )
}

export default Welcome
