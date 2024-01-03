import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {PlusIcon} from "react-native-heroicons/outline"

const Outfits = () => {
  return (
    <SafeAreaView>

        {/* Header */}
        <View className='p-5 flex flex-row items-center'>

            <View className='flex-1'>
              <Text className='text-xl font-bold'>Outfits</Text>
            </View>
            
            <TouchableOpacity>
              <PlusIcon  color={"black"}/>
            </TouchableOpacity>
            
            
        </View>



    </SafeAreaView>
  )
}

export default Outfits