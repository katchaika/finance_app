import { fieldStyles } from '@/src/components/ui/styles';
import { Text, View, useThemeColors } from '@/src/components/Themed';
import { TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  label: string
};

export function Input({ label, ...props }: InputProps) {
  const colors = useThemeColors();
  
  return ( 
    <View>
      <Text style={fieldStyles.label}>{label}</Text>
      <TextInput
        style={[
          fieldStyles.input,
          {
            //borderColor: error ? colors.error : colors.border,
            borderColor: colors.border,
            color: colors.text,
            backgroundColor: colors.secondaryBackground
          },
        ]}
        {...props}
      />
    </View>
  )
}
