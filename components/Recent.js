import React from 'react';
import { View, Text, Image } from 'react-native';
import recent from '../assets/recent.png';
import { Box } from 'native-base';

export default function RecentActivities() {
  return (
    <View>
      <Box flexDirection="row" alignItems="center" mb={4} mt={2}>
        <Text style={{ color: 'white', fontSize: 20, marginRight: 4 }}>
          Recent
        </Text>
        <Image source={recent} style={{ width: 24, height: 24, marginBottom: 2, marginLeft: 2 }} />
      </Box>
      <Box
        bg="#2c2e30"
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
        <Box>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Skechers
          </Text>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
            408696
          </Text>
        </Box>
        <Box justifyContent="flex-end">
          <Text style={{ color: 'white', fontSize: 14 }}>02:45:00 mins</Text>
        </Box>
      </Box>
      <Box
        bg="#2c2e30"
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
        <Box>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Skechers
          </Text>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
            408696
          </Text>
        </Box>
        <Box justifyContent="flex-end">
          <Text style={{ color: 'white', fontSize: 14 }}>02:45:00 mins</Text>
        </Box>
      </Box>
      <Box
        bg="#2c2e30"
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
        <Box>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Skechers
          </Text>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
            408696
          </Text>
        </Box>
        <Box justifyContent="flex-end">
          <Text style={{ color: 'white', fontSize: 14 }}>02:45:00 mins</Text>
        </Box>
      </Box>
    </View>
  );
}
