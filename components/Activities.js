import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import activities from '../assets/activity.png';

export default function Activities() {
  const [hour, setHour] = useState(23);

  return (
    <View >
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
        <Text style={{ color: 'black', fontSize: 18, marginRight: 4, fontWeight: 'bold' }}>
          Activities
        </Text>
        <Image source={activities} style={{ width: 24, height: 24 }} />
      </View>
      <View style={{width: 360, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#25D366',
          width: 150,
          height:130,
          borderRadius: 12,
          marginBottom: 8,
          display:'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 18,
          paddingHorizontal: 16,
          marginRight: 32
        }}
      >
        {/* Total Hours */}
        <View style={{width: 100,  display:'flex', alignItems:'center'}}>
          <Text style={{ color: 'white', fontSize: 18 }}>Total Hours</Text>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 35,
              fontWeight: 'bold',
              marginTop:16,
            }}
          >
            {hour}h
          </Text>
        </View>
        {/* Daily Streak */}
        
      </View>
      <View
        style={{
          backgroundColor: '#25D366',
          width: 150,
          height: 130,
          borderRadius: 12,
          marginBottom: 8,
          flexDirection: 'row',
          justifyContent: 'center',
       
          paddingTop: 18,
          paddingHorizontal: 16,
      
        }}
      >
        {/* Total Hours */}
        <View style={{width: 100,  display:'flex', alignItems:'center'}}>
          <Text style={{ color: 'white', fontSize: 18 }}>Total Hours</Text>
          <Text
            style={{
           
              color: '#ffffff',
              fontSize: 35,
              fontWeight: 'bold',
             marginTop:16,
             
            }}
          >
            {hour}h
          </Text>
        </View>
        {/* Daily Streak */}
        </View>
      </View>
    </View>
  );
}
