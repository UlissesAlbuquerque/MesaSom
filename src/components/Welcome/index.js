import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import styles from './styles'
import Slider from '../Slider'
import reactotron from 'reactotron-react-native'
import { getChannels } from '../../services/channels'

const Welcome = () => {
  const [channels, setChannels] = useState({})
  


  const handleSlideValueChange = (value) =>{
    console.log(value);
  }


  const handleGetChannels = async() => {
    let response = await getChannels()
    setChannels(response)

    // let arrayOfChannels = Object.keys(channels)
    // reactotron.log(arrayOfChannels)
    // arrayOfChannels.map(propertie =>{
    //   return <Slider/>
    // })


  }


  useEffect(() => {
    handleGetChannels()

  }, [])


  return (
    <View style={{display:'flex', flex:1, padding:50, flexDirection:'row'}}>
     {Object.keys(channels).map((channel,index) =>{
       reactotron.log('Welcome',channels[channel])
       return <Slider key={index} initialValue={channels[channel]} />
     })}

      {/* <Slider initialValue={-255}/> */}
      <Button 
      title='Teste'
      onPress={()=>{
        handleGetChannels()
      }}><Text>Teste</Text></Button>
    </View>
  )
}

export default Welcome
