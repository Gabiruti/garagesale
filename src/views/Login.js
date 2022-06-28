import React, {useState, Component} from 'react';
import { StyleSheet, 
    TextInput, 
    SafeAreaView, 
    Button, 
    Alert, 
    View, 
    Text, 
    Image,
    TouchableOpacity
} from 'react-native';    


import { useNavigation } from '@react-navigation/native';

export default function Login(props) {

    const navigation = useNavigation();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
      <SafeAreaView style={styles.container}>
          <Image
          style={styles.logo} 
          source={require('./logo.png')}/>
          <Text style={styles.title}>Garage Sale</Text>
            <TextInput style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType="email-address"/>
            <TextInput 
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}/>
                <View style={styles.buttomFlex}>
                <TouchableOpacity style={styles.buttom} onPress={() => props.signin(email, password)}>
                    <Text style={styles.buttomtxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttomtxt}>Registro</Text>
                </TouchableOpacity>
                </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,

    },
    
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8
    },

    title: {
        width: 300,
        fontFamily: 'Red Rose',
        fontStyle: 'normal',
        fontSize: 28,
        lineHeight: 27,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#000000',
        marginBottom: 20,
        marginLeft: 110
    },

    logo: {
        width: 80,
        height: 80,
        padding: 30,
        marginBottom: 20
    },

    buttomFlex: {
        width: 150,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    buttom: {
        marginTop: 30,
        backgroundColor: "#AE7A14",
        padding: 6,
        

    },
    buttomtxt: {
        fontSize: 16,
        color: "#FFF",
        

    },
 
  });
  
