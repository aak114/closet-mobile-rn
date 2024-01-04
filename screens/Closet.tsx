import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {PlusIcon} from "react-native-heroicons/outline"
import { TouchableOpacity } from 'react-native-gesture-handler';


const Closet = () => {

  

  return (
    <SafeAreaView className='bg-white h-full'>
    
        {/* Header */}
        <View className='p-5 flex flex-row items-center'>

            <View className='flex-1'>
              <Text className='text-xl font-bold'>Closet</Text>
            </View>
            
            <TouchableOpacity onPress={onOpen}>
              <PlusIcon  color={"black"}/>
            </TouchableOpacity>
            
            
        </View>

        


    </SafeAreaView>
  )
}

export default Closet;