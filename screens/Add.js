import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Calendar from '../components/Calendar';
import OTForm from '../components/OTForm';

export default function Add() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'#ffffff' }}>
       
       <Calendar/>
      <OTForm/>
      </View>
    );
  }
