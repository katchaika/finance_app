import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Text, View, useThemeColors } from '@/src/components/Themed';

type InputProps = TextInputProps & {
  label: string
};

export function Input({ label, ...props }: InputProps) {
  const colors = useThemeColors();

  return ( 
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input,
          {borderColor: colors.border}
        ]}
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
