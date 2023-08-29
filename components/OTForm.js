import React from "react";
import { Stack, Text, Input } from "native-base";
import MyTimePicker from "../constants/MyTimePicker";

const OTForm = () => {
  const handleTimeChange = (hour, minute) => {
    // Handle the selected time
    console.log("Selected time:", hour, minute);
  };

  return (
    <Stack space={4} w="75%" maxW="300px" mx="auto">
      <Text bold fontSize="xl" style={{ color: "white" }}>
        Default
      </Text>
      <Input variant="outline" placeholder="Outline" style={{ color: "white" }} />
      <Input variant="outline" placeholder="Outline" style={{ color: "white" }} />
      <MyTimePicker onConfirm={handleTimeChange} />
    </Stack>
  );
};

export default OTForm;
