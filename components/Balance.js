import React from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function Balance() {
    const [balance, setBalance] = useState(1000);
  return (
    <View
            style={{
              backgroundColor: '#5378FF',
              width: '85%',
              height: "20%",
              borderRadius: 8,
              marginBottom: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
              Total Balance
            </Text>
            <Text style={{ fontSize: 55, color: 'white', fontWeight: 'bold' }}>${balance}</Text>
          </View>
  )
}
