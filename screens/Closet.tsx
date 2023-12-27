import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Closet = () => {
  return (
    <SafeAreaView>
    
        {/* Header */}
        <View className='p-5 flex flex-row'>
            <Text className='text-lg'>Closet</Text>
            
        </View>



    </SafeAreaView>
  )
}

export default Closet;