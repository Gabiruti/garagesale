import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, 
    TextInput, 
    SafeAreaView, 
    Button, 
    Alert, 
    View, 
    Text, 
    Image,
    TouchableOpacity,
    ScrollView,
    List, 
    Await
} from 'react-native';    
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Stores from '../views/Stores';
import OtherStores from '../views/OtherStores';
import axios from 'axios';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Home(props) {
    const navigation = useNavigation();
    const user = auth().currentUser;


      
    return (
      <Stack.Navigator>
      <Stack.Screen name="Store" options={{ headerShown: false }}>
        {(props) => <Stores  />}
      </Stack.Screen>
      <Stack.Screen name="StoreItens" options={{ headerShown: false }}>
        {(props) => <OtherStores  />}
      </Stack.Screen>
    </Stack.Navigator>
    );
  }
  


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      //justifyContent: 'space-evenly',
      //alignItems: 'stretch',
      padding: 12
    },
    title: {
      fontSize: 18,
      marginTop: 12,
    }
  });
