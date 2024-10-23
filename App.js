import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionStack from './screens/TransactionStack';
import SummaryScreen from './screens/SummaryScreen';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: { backgroundColor: '#6200ee' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#D1C4E9',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              
              if (route.name === 'Transactions') {
                iconName = 'attach-money';
              } else if (route.name === 'Summary') {
                iconName = 'pie-chart';
              }

              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Transactions" component={TransactionStack} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
