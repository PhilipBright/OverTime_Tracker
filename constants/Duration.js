import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Duration = ({ onConfirm }) => {
  const [showPicker, setShowPicker] = useState(true); // Show the picker by default
  const [time, setTime] = useState(new Date());

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      const seconds = selectedTime.getSeconds();
      console.log(`Selected Time: ${hours}:${minutes}:${seconds}`);
      // You can pass the hours, minutes, and seconds to the onConfirm function if needed
      onConfirm(hours, minutes, seconds);
    }
  };
  
  

  return (
    <View style={{ width: 100, display: "flex", justifyContent: "flex-start" }}>
      {showPicker && (
        <DateTimePicker
          value={time}
          mode='time'
  date={new Date(new Date().setHours(0, 0, 0, 0))}
  locale='en_GB'
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

export default Duration;
