import api from '../config/Api'
import reactotron from 'reactotron-react-native'

export const getChannels = async () => {
  try {
    let response = await api.get('/soundchannels')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const postChannels = async (data) => {
  try {
    let response = await api.post('/soundchannels', data)
    return response.data
  } catch (error) {
    reactotron.log(error)
  }
}
