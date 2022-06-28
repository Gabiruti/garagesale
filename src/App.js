/*import React, { Component } from 'react'
//import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import Login from './views/Login.js'
import Dashboard from './views/dashboard.js'


export default class App extends Component {
    render(){
        return(
            <Login />
        )
    }
}
register errors:
'auth/email-already-in-use'
'auth/invalid-email'
'auth/weak-password'

login errors:
'auth/wrong-password'
'auth/invalid-email'
'auth/user-not-found'

#AE7A14 -- cor marrom --- #9C6D12

*/

import React, { useState, Alert } from 'react';
import Login from './views/Login';
import Authenticated from './views/Authenticated';
import Authentication from './views/Authentication';
import Register from './views/Register';
import axios from 'axios';


import auth from '@react-native-firebase/auth';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

axios.defaults.baseURL = 'http://127.0.0.1:8080';
const Stack = createNativeStackNavigator();


export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [noError, setNoError] = useState(false)

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });


  const createUser = (email, password, passwordconfirm) => {
    if (email == '' || password == '' ){
      alert("Email e Senha obrigatorios");
    }
    else if (/\s/g.test(password)){
      alert("A senha não pode conter espaços");
    }
    else if (password != passwordconfirm){
      alert("As senhas devem iguais");
    }
    else{
    try {
      auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert('Email já cadastrado!')
            break;
          case 'auth/weak-password':
            alert('Sua senha deve ter pelo menos 6 caracteres!')
            break;
          case 'auth/invalid-email':
            alert('Ensira um Email válido!')
            break;
        }
      })
      axios.post('/insert', {
        userEmail: email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      }) }catch(err){
      alert("Error : ", err);
    }
  }
}


  const signin = (email, password) => {
    if (email == '' || password == '' ){
      alert("Email e Senha obrigatorios");
    }
    else{ 
    try {
      auth().signInWithEmailAndPassword(email, password)
      .catch(error => {   
        switch(error.code) {
          case 'auth/user-not-found':
            alert('Usuário não encontrado, cadastre-se!')
            break;
          case 'auth/wrong-password':
            alert('Email/Senha inválidos!')
            break;
          case 'auth/invalid-email':
            alert('Email/Senha inválidos!')
            break;
        }
      })
          }catch(err){
      alert("Error : ", err);
    }
  }};


  if (authenticated) {
    return <Authenticated />;
  }

  return (
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Login" options={{ headerShown: false }}>
    {(props) => <Login signin={signin}/>}
  </Stack.Screen>
  <Stack.Screen name="Register"                 options={{
                  title: 'Registro',
                  headerStyle: {
                    backgroundColor: '#AE7A14',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}>
    {(props) => <Register createUser={createUser}/>}
  </Stack.Screen>
</Stack.Navigator>
</NavigationContainer>

)

}