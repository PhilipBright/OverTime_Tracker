import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import profile from '../assets/user.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import recent from '../assets/recent.png'

import { ScrollView } from 'react-native';
import Balance from '../components/Balance';
import Activities from '../components/Activities';
import Recent from '../components/Recent';
// Define navigationOptions outside of the HomeScreen component
HomeScreen.navigationOptions = {
  headerShown: false, // Hide the header
};

export default function HomeScreen() {
  
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#1E1E1E' }}>
      <ScrollView >
        <View className=" flex justify-center items-center">
      <TouchableOpacity className=" w-screen h-20 flex-row justify-start items-center mb-4 ml-8 mt-2">
        <View>
          <Image source={profile} className=" w-14 h-14 rounded-[50px]" />
        
        </View>
        <View className=" ml-2">
          <Text className=" text-white font-bold text-xl">Naw Emerald Soe Moe Ko</Text>
          <Text className=" text-white">Professional Cleaning Service Provider</Text>
        </View>
       
      
      </TouchableOpacity>
      <Balance/>
      <Activities/>
      <Recent/>
      
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
