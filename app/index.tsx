import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView className='mt-5 mx-2.5'>
      <View className='mt-10'>
        <Text className='text-3xl font-work-black text-primary'>Hola mundo</Text>
        <Text className='text-2xl font-work-medium text-secundary'>Hola mundo</Text>
        <Text className='text-xl font-work-light text-tertuary'>Hola mundo</Text>
        <Text className='text-xl font-work-light text-secundary-100'>Hola mundo</Text>

      </View>

      <Link href='/products'>
        Productos
      </Link>
    </SafeAreaView>
  )
}

export default App