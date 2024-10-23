import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';

const Stack = createStackNavigator();

export default function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionList"
        component={TransactionList}
        options={{ title: 'Transactions List', headerStyle: { backgroundColor: '#6200ee' }, headerTintColor: '#fff' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{ title: 'Transaction Details', headerStyle: { backgroundColor: '#6200ee' }, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  );
}
