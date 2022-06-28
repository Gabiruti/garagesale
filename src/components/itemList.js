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
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function ItemBox(props) {

  const navigation = useNavigation();


  const deleteItens = () => {
    fetch("http://127.0.0.1:8080/deleteitem?iditem=" + props.iditem)
    
    }

  const showAlert = () =>
  Alert.alert(
    "Descrição",
    props.descriptionItem,
    [
      {
        text: "Deletar",
        onPress: () => deleteItens(),
        style: "cancel",
      },
    ],
    {
      cancelable: true
    }
  );

    return(
        <TouchableOpacity style={styles.box} onPress={() => showAlert() } >
            <Image
            style={styles.logo} 
            source={require('../views/logo.png')}/>
          <Text style={styles.storeName}>{props.itemName}</Text>
        </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    box: {
        //flex: 1,
        //display: 'flex',
        flexDirection: "row",
        //alignItems: 'center',
        //flexWrap: "wrap",
        //justifyContent: 'flex-start',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 15,
        
      },   
    storeName: {
        width: '85%',
        fontSize: 25,
        padding:  12,
        //flexDirection: "row",
        //textAlign: 'justify',
    },
    location: {
        width: '15%',
        fontSize: 18,
        marginTop: 12,
        //padding: 10,
      },
    logo: {
        width: '15%',
        height: '80%',
        padding: 12,
        marginBottom: 20,
    },
    button: {
      height: 100,
        backgroundColor: "#4286f4",
        padding: 6,
    }
  });


