import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Calendar from '../components/Calendar';
import OTForm from '../components/OTForm';
import { ScrollView } from 'native-base';

export default function Add() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor:'#ffffff', marginTop:50 }}>
       <ScrollView>
       <Calendar/>
      <OTForm/>
      </ScrollView>
      </SafeAreaView>
    );
  }
