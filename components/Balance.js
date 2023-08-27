import React from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function Balance() {
    const [balance, setBalance] = useState(1000);
  return (
    <View className=" bg-[#FF6600] w-80 h-40 rounded-lg mb-10 flex justify-center items-center" >
        <Text className=" text-[20px] text-white font-medium">Total Balance</Text>
        <Text className=" text-[60px] text-white ">${balance}</Text>
      </View>
  )
}
