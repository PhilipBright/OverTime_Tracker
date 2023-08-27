import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import profile from '../assets/user.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import recent from '../assets/recent.png'
import acticities from '../assets/activity.png'
import { ScrollView } from 'react-native';

// Define navigationOptions outside of the HomeScreen component
HomeScreen.navigationOptions = {
  headerShown: false, // Hide the header
};

export default function HomeScreen() {
  const [balance, setBalance] = useState(1000);
  const [hour, setHour] = useState(23)
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
      <View className=" bg-[#FF6600] w-80 h-40 rounded-lg mb-8 flex justify-center items-center">
        <Text className=" text-[20px] text-white font-medium">Total Balance</Text>
        <Text className=" text-[60px] text-white ">${balance}</Text>
      </View>
      <View className=" w-screen flex justify-start ml-8 mb-2 flex-row"> 
      <Text className="text-white text-lg">Activities</Text>
      <Image source={acticities} className=" w-6 h-6 ml-2" />
      </View>
      <View className=" bg-[#FF6600] w-[360px] h-24 rounded-sm mb-6 flex-row justify-center">
        
        <View className=" flex justify-center items-center w-28">
        <Text className=" text-lg text-white">Total Hours</Text>
        <Text className=" text-2xl font-medium text-[#ffffa1]">{hour}h</Text>
        </View>
        <View className=" flex justify-center items-center w-28 ">
        <Text className=" text-lg text-white">Daily Streak</Text>
        <Text className=" text-2xl font-medium text-[#ffffa1]">{hour}h</Text>
        <View className="absolute left-0 h-16 border-l-2 border-[#ff983f] top-4 transform -translate-y-1/2"></View>
        </View>
        <View className=" flex justify-center items-center w-28 ">
        <Text className=" text-lg text-white">Total Hours</Text>
        <Text className=" text-2xl font-medium text-[#ffffa1]">{hour}h</Text>
        <View className="absolute left-0 h-16 border-l-2 border-[#ff983f] top-4 transform -translate-y-1/2"></View>

        </View>
      </View>
      <View>
        <View className="  flex-row items-center">
        <Text className="text-white text-lg mb-2">Recent</Text>
        <Image source={recent} className=" w-6 h-6 mb-2 ml-2" />
        </View>
        
      <View className=" bg-[#2c2e30] w-[360px] h-20 rounded-r-md border-l-4 border-[#FF6600] mb-4 flex-row justify-between">
      <View className=" w-auto h-full flex justify-center ml-4">
        <Text className=" text-[15px] text-white font-bold">Skechers</Text>
        <Text className=" text-[25px] text-white font-medium">408696</Text>
        
        </View>
        <View className=' flex justify-center items-end mr-4'>
          <Text className=" text-white text-md">02:45:00 mins</Text>
        </View>
        
      </View>
      <View className=" bg-[#2c2e30] w-[360px] h-20 rounded-r-md border-l-4 border-[#FF6600] mb-4 flex-row justify-between">
      
      <View className=" w-auto h-full flex justify-center ml-4">
        <Text className=" text-[15px] text-white font-bold">Skechers</Text>
        <Text className=" text-[25px] text-white font-medium">408696</Text>
        
        </View>
        <View className=' flex justify-center items-end mr-4'>
          <Text className=" text-white text-md">02:45:00 mins</Text>
        </View>
        
      </View>
      <View className=" bg-[#2c2e30] w-[360px] h-20 rounded-r-md border-l-4 border-[#FF6600] mb-4 flex-row justify-between">
      
      <View className=" w-auto h-full flex justify-center ml-4">
        <Text className=" text-[15px] text-white font-bold">Skechers</Text>
        <Text className=" text-[25px] text-white font-medium">408696</Text>
        
        </View>
        <View className=' flex justify-center items-end mr-4'>
          <Text className=" text-white text-md">02:45:00 mins</Text>
        </View>
        
      </View>

      
      
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
