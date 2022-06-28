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
    ScrollView

} from 'react-native';
import axios from 'axios';
import auth from '@react-native-firebase/auth'

import ItemBox from '../components/itemList';


import { useNavigation } from '@react-navigation/native';

export default function ItemScreen(props) {

  const usera = auth().currentUser;
  const navigation = useNavigation();


  const listItens = () => {
    return props.item.map((element) => {
      return (
        <View key={element.idItems}>
          <ItemBox itemName = {element.name} descriptionItem = {element.description_item } price = {element.price} iditem={element.idItems}/>
        </View>
      );
    });
  };

    return(
      <SafeAreaView style={styles.container}>
      <ScrollView>
        {listItens()}
      </ScrollView>
      <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Additens')}>
        <Text style={styles.buttomtxt}>Add item</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,

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
    

    buttom: {
      //position: 'absolute',  
      bottom:0,
      backgroundColor: "#AE7A14",
      padding: 6,
    },
    buttomtxt: {
        fontSize: 16,
        color: "#FFF",
        

    },
 
  });
  
