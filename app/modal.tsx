import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import AddExpanseScreen from '@/src/components/screens/AddExpanseScreen';
import { Text, View } from '@/src/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <AddExpanseScreen path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
