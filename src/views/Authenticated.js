/*
<View style={styles.button}>
<Button title="Signout" onPress={() => auth().signOut()} />
</View>

<Button title="Go to Settings"
        onPress={() => navigation.navigate('Minha Loja')}
      />
*/

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import Home from './Home';
import MyStore from './MyStore';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function Authenticated() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
                  options={{
                  title: 'Lojas',
                  headerStyle: {
                  backgroundColor: '#AE7A14',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                  fontWeight: 'bold',
                  },
                  }} />
        <Tab.Screen name="Minha Loja"
                options={{
                  title: 'Minha Loja',
                  headerStyle: {
                    backgroundColor: '#AE7A14',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
        >
          {(props) => <MyStore />}
        </Tab.Screen>
        <Tab.Screen name="Configurações" component={Settings} 
                options={{
                  title: 'Configurações',
                  headerStyle: {
                    backgroundColor: '#AE7A14',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  button: {
    marginTop: 30,
  },
});


