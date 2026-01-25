import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../Themed';
import { Input } from '@/src/components/ui';

type ExpenseForm = {
  name: string;
  amount: string;
  date: Date;
  category: string;
}

export default function AddExpanseScreen({ path }: { path: string }) {

  const [form, setForm] = useState<ExpenseForm>({
    name: '',
    amount: '',
    date: new Date,
    category: ''
  });

  const formHandler = <K extends keyof ExpenseForm>(
    key: K, value: ExpenseForm[K]
  ) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  return (
    <View style={styles.container}>
      <Input
        label={'Name'}
        value={form.name}
        onChangeText={text => formHandler('name', text)}
      />
      <Input
        label={'Amount'}
        value={form.amount}
        onChangeText={text => formHandler('amount', text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  }
});
