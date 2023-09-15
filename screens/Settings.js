import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Edit from '../assets/edit.png'
import Profile from '../assets/user.png'
import { useState } from 'react'
import Camera from '../assets/camera.png'
import History from '../assets/file.png'
import Rate from '../assets/interest.png'
import Password from '../assets/password.png'
import Question from '../assets/question.png'
import { ScrollView } from 'native-base'

function Settings() {
  const [username, setUsername] = useState('Naw Emerald Soe Moe Ko')
  const [email, setEmail] = useState('nawemerald243@gmail.com')

  return (
     <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
      <ScrollView >
   
      <View style={{width:'100%', height:'32%', backgroundColor: '#5378FF', flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{marginLeft:15, marginTop:20}}>
          <Text style={{color:'white', fontSize:20}}>{username}</Text>
          <Text style={{color:'white', fontSize:18, paddingTop:5}}>{email}</Text>
        </View>
        <View style={{marginRight:15, marginTop:20}}>
          <Image source={Edit} style={{width:30, height:30}} />
        </View>
      </View>

      <View style={{marginTop:-90, marginLeft:40}}>
        <Image source={Profile}  style={{width:150, height:150}} />
      </View>

    <View style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 20}}>
      <View>
        <TouchableOpacity style={{width: 300, height:50, backgroundColor:'#FFE8BB', display:'flex', flexDirection:'row', justifyContent:'start', alignItems:'center',  borderRadius:10, paddingLeft:25}}>
          <Image source={Camera} style={{width:40, height: 40, marginRight:10}} />
          <Text >Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 20}}>
      <View>
      <TouchableOpacity style={{width: 300, height:50, backgroundColor:'#FFE8BB', display:'flex', flexDirection:'row', justifyContent:'start', alignItems:'center',  borderRadius:10, paddingLeft:25}}>
        <Image source={History} style={{width:40, height: 40, marginRight:10}} />
          <Text>Over Time History</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 20}}>
      <View>
      <TouchableOpacity style={{width: 300, height:50, backgroundColor:'#FFE8BB', display:'flex', flexDirection:'row', justifyContent:'start', alignItems:'center',  borderRadius:10, paddingLeft:25}}>
        <Image source={Rate} style={{width:40, height: 40, marginRight:10}} />
          <Text>Set Hourly Rate</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 20}}>
      <View>
      <TouchableOpacity style={{width: 300, height:50, backgroundColor:'#FFE8BB', display:'flex', flexDirection:'row', justifyContent:'start', alignItems:'center',  borderRadius:10, paddingLeft:25}}>
        <Image source={Password} style={{width:40, height: 40, marginRight:10}} />
          <Text>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 20}}>
      <View>
      <TouchableOpacity style={{width: 300, height:50, backgroundColor:'#FFE8BB', display:'flex', flexDirection:'row',justifyContent:'start', alignItems:'center',  borderRadius:10, paddingLeft:25}}>
        <Image source={Question} style={{width:40, height: 40, marginRight:10}} />
          <Text>FAQ</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop: 40}}>
      <View>
        <TouchableOpacity style={{width: 200, height:50, backgroundColor:'#E0E0E0', display:'flex', justifyContent:'center',  alignItems:'center',borderRadius:10, }}>
          <Text style={{color:'red'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
</ScrollView>
    </SafeAreaView>
    
  )
}

export default Settings