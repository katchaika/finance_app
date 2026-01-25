import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  label: string
};

export function Input({ label, ...props }: InputProps) {
  return ( 
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  label: {
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 3,
  },
});
