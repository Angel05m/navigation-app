import React from 'react'
import { View } from 'react-native'

import { Slot } from 'expo-router'
import "./global.css"

const RootLayout = () => {
  return (
    <View>
      <Slot/>
    </View>
  )
}

export default RootLayout