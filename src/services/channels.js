import api from '../config/Api'



export const getChannels = async () => {
  try {
    let response = await api.get('/soundchannels')
    return response.data
  } catch (error) {
      console.log(error)
  }
}
