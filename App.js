import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NumberGuesser from './screens/numberGuesser'
import RockPaperScissors from './screens/rockPaperScissor';
import TicTacToe from './screens/ticTacToe'
import Home from './screens/Home'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="NumberGuesser" component={NumberGuesser} />
        <Stack.Screen name="RockPaperScissors" component={RockPaperScissors} />
        <Stack.Screen name="TicTacToe" component={TicTacToe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})