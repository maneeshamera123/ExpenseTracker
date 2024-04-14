import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import AddExpenses from './Screens/AddExpenses';
import ViewExpenses from './Screens/ViewExpenses';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenses} />
        <Stack.Screen name= "ViewExpenses" component={ViewExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



