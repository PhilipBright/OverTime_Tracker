import React from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function Balance() {
    const [balance, setBalance] = useState(1000);
  return (
    <View
            style={{
              backgroundColor: '#FF6600',
              width: '80%',
              height: "20%",
              borderRadius: 8,
              marginBottom: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
              Total Balance
            </Text>
            <Text style={{ fontSize: 60, color: 'white' }}>${balance}</Text>
          </View>
  )
}
