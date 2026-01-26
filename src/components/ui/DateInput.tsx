import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons';

import { fieldStyles } from '@/src/components/ui/styles';
import { View } from '@/src/components/Themed';

type DateInputProps = {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
};

export function DateInput({ label, value, onChange }: DateInputProps) {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(value);
  

  const onPickerChange = (_: any, selectedDate?: Date) => {
    if (Platform.OS !== 'ios') {
      setShow(false);
    }

    if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const onCancel = () => {
    setTempDate(value);
    setShow(false);
  };

  const onDone = () => {
    onChange(tempDate);
    setShow(false);
  };

  return ( 
    <>
    <View>
      <Text style={fieldStyles.label}>{label}</Text>

      <Pressable
        style={[fieldStyles.input, styles.dateInput]}
        onPress={() => setShow(true)}
      >
        <Text>{value.toLocaleDateString()}</Text>
        <Entypo name="calendar" size={24} color="rgb(40 40 40)" />
      </Pressable>

      
    </View>
    {show && (
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <DateTimePicker
              value={value}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onPickerChange}
            />
            <View style={styles.buttons}>
              <TouchableOpacity onPress={onCancel}>
                <Text style={[styles.action, styles.cancel]}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onDone}>
                <Text style={styles.action}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  dateInput: {
    justifyContent: 'space-between',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 20,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },

  action: {
    fontSize: 16,
    color: '#007aff',
    paddingHorizontal: 16
  },

  cancel: {
    color: 'rgb(40 40 40)'
  }
});
