import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {PlusIcon} from "react-native-heroicons/outline"
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddToClosetActionSheet from '../components/ActionSheet/AddToClosetActionSheet';

const Closet = () => {

  

  return (
    <SafeAreaView className='bg-white h-full'>
    
        {/* Header */}
        <View className='p-5 flex flex-row items-center'>

            <View className='flex-1'>
              <Text className='text-xl font-bold'>Closet</Text>
            </View>
            
            {/* Add to Closet Plus Icon button that opens the Action Sheet */}
            <AddToClosetActionSheet/>

            
        </View>

        


    </SafeAreaView>
  )
}

export default Closet;