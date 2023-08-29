import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Calendar from '../components/Calendar';
import OTForm from '../components/OTForm';

export default function Add() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#1E1E1E' }}>
       <Calendar/>
      <OTForm/>
      </View>
    );
  }
