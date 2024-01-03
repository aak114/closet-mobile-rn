import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Closet from './screens/Closet';
import Account from './screens/Account';
import {ViewColumnsIcon, UserIcon, CalendarIcon} from "react-native-heroicons/outline"
import Outfits from './screens/Outfits';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (

      <Tab.Navigator>

        <Tab.Screen 
        name='Outfits' 
        component={Outfits} 
        options={{
          headerShown: false, 
          tabBarIcon: () => {
            return (
            <CalendarIcon color={"black"}/>
            )
          }
        }} 
        />  

        <Tab.Screen 
        name='Closet' 
        component={Closet} 
        options={{
          headerShown: false, 
          tabBarIcon: () => {
            return (
            <ViewColumnsIcon color={"black"}/>
            )
          }
        }} 
        />

        <Tab.Screen 
        name='Account' 
        component={Account} 
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <UserIcon color={"black"}/>
            )
          }
        }} 
        />
      </Tab.Navigator>

    )
}

export default function App() {
  return (

    <NavigationContainer>
        
        <Stack.Navigator>

            <Stack.Screen
              name='Home'
              component={Home}
              options={{headerShown: false}}
            />

        </Stack.Navigator>

    </NavigationContainer>
    
  );
}


