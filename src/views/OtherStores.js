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

import OItemBox from '../components/Otheitemlist';


import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute  } from '@react-navigation/native';

export default function OtherStores(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const [Oitens, setOItens] = useState([]);

    const { emailuser } = route.params;

  console.log(emailuser)

  const fetchitens = async () => {
    const resp = await fetch("http://127.0.0.1:8080/items?user=" + emailuser);
    const data = await resp.json();
    setOItens(data);
    console.log(data);
    //setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          fetchitens();
        });
    
        return unsubscribe;
      }, [navigation]);

  const listItens = () => {
    return Oitens.map((element) => {
      return (
        <View key={element.idItems}>
          <OItemBox itemName = {element.name} descriptionItem = {element.description_item } price = {element.price}/>
        </View>
      );
    });
  };

    return(
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}> items {emailuser}: </Text>
      <ScrollView>
        {listItens()}
      </ScrollView>
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
      position: 'absolute',  
      bottom:0,
      backgroundColor: "#4286f4",
      padding: 6,
    },
    buttomtxt: {
        fontSize: 16,
        color: "#FFF",
        

    },
 
  });
  
