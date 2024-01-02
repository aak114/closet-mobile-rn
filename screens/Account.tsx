import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Account = () => {
  return (
    <SafeAreaView className='bg-white h-full'>

        {/* Header */}
        <View className='p-5 flex flex-row'>
          
            <Text className='text-xl font-bold'>Account</Text>
            
        </View>

    </SafeAreaView>
  )
}

export default Account