import React, {useState, Component} from 'react';
import { StyleSheet, 
    TextInput, 
    SafeAreaView, 
    Button, 
    Alert, 
    View, 
    Text, 
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';    
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function StoreForm(props) {

    const navigation = useNavigation();


    const [storeName, setStoreName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('')
    const user = auth().currentUser;

    

    return(
      <ScrollView>
      <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Preencha os campos para abrir sua loja!</Text>
            <TextInput style={styles.input}
                value={storeName}
                onChangeText={setStoreName}
                placeholder="Nome da Loja"
                keyboardType="default"/>
          <TextInput style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Descrição"
                keyboardType="default"/>
          <TextInput style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Localização"
                keyboardType="default"/>
                <View style={styles.buttomFlex}>
                <TouchableOpacity style={styles.buttom} onPress={() => props.createStore(user.email,storeName, description, location)}>
                    <Text style={styles.buttomtxt}>Abrir Loja</Text>
                </TouchableOpacity>
                </View>
      </SafeAreaView>
      </ScrollView>

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
        fontSize: 20,
        lineHeight: 27,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#000000',
        marginBottom: 20,
        marginLeft: 1
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
  
