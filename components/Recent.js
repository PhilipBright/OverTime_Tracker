import React from 'react';
import { View, Text, Image } from 'react-native';
import recent from '../assets/recent.png';
import { Box } from 'native-base';
import Job1 from '../assets/job1.png'
export default function RecentActivities() {
  return (
    <View>
      <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Box flexDirection="row" alignItems="center" mb={4} mt={2}>
        <Text style={{ color: 'black', fontSize: 18, marginRight: 4, fontWeight: 'bold' }}>
          Recent
        </Text>
        
        <Image source={recent} style={{ width: 24, height: 24, marginBottom: 2, marginLeft: 2 }} />
      </Box>
      <Box mt={6} style={{}}>
      <Text>
          View all
        </Text>
      </Box>
      </View>
      <Box
        bg="#FFEFD0"
        width={360}
        height={20}
        roundedRight="md"
        borderLeftWidth={4}
        borderLeftColor="#FF6600"
        mb={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
      
        
      <View style={{display:'flex', flexDirection:'row', }}>
         <Image source={Job1} style={{width:50, height:50}} />
        
        <Box ml={4}>
          <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
            Skechers
          </Text>
          <Text style={{ color: 'gray', fontSize: 14 }}>
           <Text>Postal Code:</Text> 408696
          </Text>
        </Box>
        </View>
        <Box justifyContent="flex-end" mt={-12}>
          <Text style={{ color: 'black', fontSize: 14 }}>08:30 PM</Text>
        </Box>
      </Box>
      <Box
        bg="#FFEFD0"
        width={360}
        height={20}
        roundedRight="md"
        borderLeftWidth={4}
        borderLeftColor="#FF6600"
        mb={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
      
        
      <View style={{display:'flex', flexDirection:'row', }}>
         <Image source={Job1} style={{width:50, height:50}} />
        
        <Box ml={4}>
          <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
            Skechers
          </Text>
          <Text style={{ color: 'gray', fontSize: 14 }}>
           <Text>Postal Code:</Text> 408696
          </Text>
        </Box>
        </View>
        <Box justifyContent="flex-end" mt={-12}>
          <Text style={{ color: 'black', fontSize: 14 }}>08:30 PM</Text>
        </Box>
      </Box>
      <Box
        bg="#FFEFD0"
        width={360}
        height={20}
        roundedRight="md"
        borderLeftWidth={4}
        borderLeftColor="#FF6600"
        mb={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
      
        
      <View style={{display:'flex', flexDirection:'row', }}>
         <Image source={Job1} style={{width:50, height:50}} />
        
        <Box ml={4}>
          <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
            Skechers
          </Text>
          <Text style={{ color: 'gray', fontSize: 14 }}>
           <Text>Postal Code:</Text> 408696
          </Text>
        </Box>
        </View>
        <Box justifyContent="flex-end" mt={-12}>
          <Text style={{ color: 'black', fontSize: 14 }}>08:30 PM</Text>
        </Box>
      </Box>
    </View>
  );
}
