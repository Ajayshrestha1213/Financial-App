import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function SummaryScreen() {
  const screenWidth = Dimensions.get('window').width;

  const data = [
    { name: 'Groceries', amount: 150, color: '#f00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Entertainment', amount: 50, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Fitness', amount: 25, color: '#00f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Summary of Expenses</Text>
        <PieChart
          data={data}
          width={screenWidth * 0.9}
          height={240}              
          chartConfig={chartConfig}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="10"
          absolute
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: Dimensions.get('window').width * 0.06,
    textAlign: 'center',
    marginBottom: 20,
  },
});
