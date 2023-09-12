import React, { useState, useEffect } from "react";
import { View, Text, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const StartedTime = ({ onConfirm }) => {
  const [showPicker, setShowPicker] = useState(true); // Show the picker by default
  const [time, setTime] = useState(new Date());

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
      onConfirm(selectedTime.getHours(), selectedTime.getMinutes());
    }

  };

 

  return (
    <View style={{width: 100, display:'flex', justifyContent:'flex-start'}}>
     
        <DateTimePicker
        
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
     
    </View>
  );
};

export default StartedTime;
