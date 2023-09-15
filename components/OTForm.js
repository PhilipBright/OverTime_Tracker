import React from "react";
import { Stack, Text, Input, Button, View } from "native-base";
import StartedTime from "../constants/StartedTime";
import Duration from "../constants/Duration";
const OTForm = () => {
  const handleStartedTimeChange = (hour, minute) => {
    // Handle the selected time
    console.log("Selected time:", hour, minute);
  };
  const handleDuration = (hour, minute) => {
    // Handle the selected time
    console.log("Selected time:", hour, minute);
  };
  const value = () => {
    console.log('clicked')
  }


  return (
    <Stack space={2} w="90%" maxW="350px" mx="auto" style={{backgroundColor: '#FFF0D2', padding:20, marginTop: 10, borderRadius: 10 }}>
      <Text bold fontSize="xl" style={{ color: "black" }}>
        Form
      </Text>
      <Text>Job Name</Text>
      <Input aria-required="true" variant="filled" placeholder="Filled" size="lg" />
      <Text>Address (Postal Code)</Text>
      <Input aria-required="true" variant="filled" placeholder="Filled" size="lg" />
      <Text>Started Time</Text>
      <StartedTime onConfirm={handleStartedTimeChange} />
      <Text>Duration</Text>
      <Duration onConfirm={handleDuration} />

      <View style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <Button onPress={value} small style={{width: 200, height: 50, backgroundColor:'#5378FF', marginTop:10, borderRadius: 10}}>
  <Text style={{fontSize: 20, color: 'white'}}>Confirm</Text>
</Button>
      </View>
    </Stack>
  );
};

export default OTForm;
