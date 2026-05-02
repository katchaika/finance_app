import { fieldStyles } from '@/src/components/ui/styles';
import { Text, View, useThemeColors } from '@/src/components/Themed';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  label: string
};

export function Button({ label, ...props }: ButtonProps) {
  const colors = useThemeColors();
  
  return ( 
    <View>
      <TouchableOpacity
        style={[
          fieldStyles.button,
          {
            backgroundColor: colors.tintColor
          },
        ]}
        {...props}
      >
        <Text style={[
          fieldStyles.buttonLabel,
          { color: colors.text }
        ]}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}
