import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function TransactionList({ navigation }) {
  const [transactions] = useState([
    { id: '1', name: 'Grocery Shopping', amount: '$80', date: '2024-10-01', category: 'Groceries' },
    { id: '2', name: 'Subscription', amount: '$20', date: '2024-10-05', category: 'Entertainment' },
    { id: '3', name: 'Gym Membership', amount: '$40', date: '2024-10-10', category: 'Fitness' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('TransactionDetail', { item })}>
            <Card.Content>
              <View style={styles.row}>
                <View>
                  <Text style={styles.transactionName}>{item.name}</Text>
                  <Text>{item.date}</Text>
                </View>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#4CAF50',
  },
});
