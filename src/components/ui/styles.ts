import { StyleSheet } from 'react-native';

export const fieldStyles = StyleSheet.create({
  label: {
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
