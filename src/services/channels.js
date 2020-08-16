// Escrita e leitura no Servidor

import api from '../config/Api'
import reactotron from 'reactotron-react-native'
import { Alert } from 'react-native'

// Leitura
export const getChannels = async () => {
  try {
    let response = await api.get('/soundchannels')
    return response.data
  } catch (error) {
    reactotron.log(error)
    alert('Falha de comunicação')
  }
}

// Escrita
export const postChannels = async (data) => {
  try {
    let response = await api.post('/soundchannels', data)
    return response.data
  } catch (error) {
    reactotron.log(error)
    alert('Falha de comunicação')
  }
}
