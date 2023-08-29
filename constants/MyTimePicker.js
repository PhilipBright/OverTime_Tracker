import React, { useState } from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const MyTimePicker = ({ onConfirm }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [time, setTime] = useState(new Date());

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
      onConfirm(selectedTime.getHours(), selectedTime.getMinutes());
    }
    setShowPicker(Platform.OS === "ios"); // Hide the picker on iOS
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={showTimePicker} style={styles.button}>
        <Text style={styles.buttonText}>TIMEPICKER</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

const styles = {
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
};

export default MyTimePicker;
