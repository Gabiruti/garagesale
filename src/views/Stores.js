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
import StoreBox from '../components/StoreBox';
import axios from 'axios';



export default function Stores(props) {
    const navigation = useNavigation();
    const user = auth().currentUser;
    const [store, setStore] = useState([]);

    const fetchData = async () => {
      const resp = await fetch("http://127.0.0.1:8080/store?user=" + user.email);
      const data = await resp.json();
      setStore(data);
      //console.log(data);
      //setLoading(false);
      };

      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
          //Put your Data loading function here instead of my loadData()
        });
        return unsubscribe;
      }, [navigation]);
    
     const list = () => {
        return store.map((element) => {
          return (
            <View key={element.idstores}>
              <StoreBox storename = {element.store_name} location = {element.location} userS = {element.email_user} />
            </View>
          );
        });
      };
      
    return (
      <SafeAreaView style={styles.screen}>
      <ScrollView>
        {list()}
      </ScrollView>
      </SafeAreaView>
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
