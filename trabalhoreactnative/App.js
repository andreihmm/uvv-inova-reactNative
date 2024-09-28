import { Text, SafeAreaView, StyleSheet, ImageBackground, View, Button } from 'react-native';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import LoginPage from './pages/LoginPage';

import RegisterPage from './pages/RegisterPage';

import RecuperarSenhaPage from './pages/RecuperarSenhaPage';

import MainPage from './pages/MainPage'


const Stack = createNativeStackNavigator();


export default function Register() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={LoginPage} 
        options={styles.headers} />
        <Stack.Screen 
        name="Register" 
        component={RegisterPage} 
        options={styles.headers}/>

        <Stack.Screen name="RecuperarSenha" 
        component={RecuperarSenhaPage} 
        options={styles.headers}/>

        <Stack.Screen name="Main" 
        component={MainPage} 
        options={styles.headers}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    headers:{
      headerStyle: {
        position: "fixed",
      },

    }
});
