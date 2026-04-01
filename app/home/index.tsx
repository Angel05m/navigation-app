import CustomButton from '@/components/shared/CustomButton'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <View className='px-5 mt-5'>

        <CustomButton color={'primary'}></CustomButton>


        {/* <Link className='mb-5' href='/products'>Productos{''}</Link>
        <Link className='mb-5' href='/profile'>Perfil{''}</Link>
        <Link className='mb-5' href='/settings'>Ajuste{''}</Link> */}

      </View>
    </SafeAreaView>
  )
}

export default Home