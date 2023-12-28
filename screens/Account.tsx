import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Account = () => {
  return (
    <SafeAreaView>

        {/* Header */}
        <View className='p-5 flex flex-row'>
          
            <Text className='text-lg'>Account</Text>
            
        </View>

    </SafeAreaView>
  )
}

export default Account