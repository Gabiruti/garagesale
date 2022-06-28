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


export default function OItemBox(props) {

  const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.box} onPress={() => '' } >
            <Image
            style={styles.logo} 
            source={require('../views/logo.png')}/>
          <Text style={styles.storeName}>{props.itemName}</Text>
          <Text style={styles.location}>{props.descriptionItem}</Text>
        </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    box: {
        //flex: 1,
        //display: 'flex',
        flexDirection: "row",
        //flexWrap: "wrap",
        //justifyContent: 'flex-start',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 15,
      },   
    storeName: {
        width: '60%',
        fontSize: 25,
        padding: 12,
        textAlign: 'justify',
    },
    location: {
        width: '25%',
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
  });


