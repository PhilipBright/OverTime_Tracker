import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import activities from '../assets/activity.png';

export default function Activities() {
  const [hour, setHour] = useState(23);

  return (
    <View>
      <View
        style={{
          width: '100%',
         
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginLeft: 4,
          marginBottom: 12,
          marginTop: 6,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, marginRight: 4 }}>
          Activities
        </Text>
        <Image source={activities} style={{ width: 24, height: 24 }} />
      </View>
      <View
        style={{
          backgroundColor: '#FF6600',
          width: 360,
          height: 90,
          borderRadius: 12,
          marginBottom: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        {/* Total Hours */}
        <View>
          <Text style={{ color: 'white', fontSize: 18 }}>Total Hours</Text>
          <Text
            style={{
              color: '#ffffa1',
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            {hour}h
          </Text>
        </View>
        {/* Daily Streak */}
        <View>
          <Text style={{ color: 'white', fontSize: 18 }}>Daily Streak</Text>
          <Text
            style={{
              color: '#ffffa1',
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            {hour}h
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '50%', // Position in the center
              width: 2,
              height: 64,
              backgroundColor: '#ff983f',
              top: '35%',
              marginRight: 4,
              transform: [{ translateX: -60 }, { translateY: -32 }],
            }}
          />
        </View>
        {/* Total Hours */}
        <View style={{ marginLeft: 8 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Total Hours</Text>
          <Text
            style={{
              color: '#ffffa1',
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            {hour}h
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '50%', // Position in the center
              width: 2,
              height: 64,
              backgroundColor: '#ff983f',
              top: '35%',
              marginRight: 4,
              transform: [{ translateX: -60 }, { translateY: -32 }],
            }}
          />
        </View>
      </View>
    </View>
  );
}
