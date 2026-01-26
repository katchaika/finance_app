import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import { fieldStyles } from '@/src/components/ui/styles';

type InputProps = TextInputProps & {
  label: string
};

export function Input({ label, ...props }: InputProps) {
  return ( 
    <View>
      <Text style={fieldStyles.label}>{label}</Text>
      <TextInput
        style={fieldStyles.input}
        {...props}
      />
    </View>
  )
}
