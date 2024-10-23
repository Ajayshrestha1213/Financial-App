import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function TransactionDetail({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Transaction Details</Text>
          <Text style={styles.detailText}>Name: {item.name}</Text>
          <Text style={styles.detailText}>Amount: {item.amount}</Text>
          <Text style={styles.detailText}>Date: {item.date}</Text>
          <Text style={styles.detailText}>Category: {item.category}</Text>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}>
        Go Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#6200ee',
  },
});
