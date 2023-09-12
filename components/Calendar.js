import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={new Date(2018, 1, 1)}
        maxDate={new Date(2050, 6, 3)}
        weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
        months={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]}
        previousTitle="Previous"
        nextTitle="Next"
        todayBackgroundColor="#25D366"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#ffffff"
        scaleFactor={375}
        textStyle={{
          color: '#ffffff',
        }}
        onDateChange={onDateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Adjust the width as needed
    alignSelf: 'center',
    backgroundColor: '#5378FF',
    padding: 16,
    borderRadius: 12, // Add rounded corners
  },
});

export default Calendar;
