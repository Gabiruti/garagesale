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
import ItemScreen from '../views/ListScreen'
import AddItem from '../views/AddItem'
import StoreForm from '../components/OpenStore';
import ItemBox from '../components/itemList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function MyStore(props) {

  const usera = auth().currentUser;
  const [hasStore, setHasStore] = useState('');
  const [itens, setItens] = useState([]);
  const navigation = useNavigation();

  const needStore = async () => {
    const resp = await fetch("http://127.0.0.1:8080/getstore?user=" + usera.email);
    const data = await resp.json();
    setHasStore(data);
    console.log(data);
    //setLoading(false);
    };

    const fetchitens = async () => {
      const resp = await fetch("http://127.0.0.1:8080/items?user=" + usera.email);
      const data = await resp.json();
      setItens(data);
      console.log(data);
      //setLoading(false);
      };
/*
    useEffect(() => {
      //fetchitens();
      needStore();
    }, []);
*/
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        fetchitens();
        needStore();
        //Put your Data loading function here instead of my loadData()
      });
  
      return unsubscribe;
    }, [navigation]);

  const createStore = (user, store_name, description, location) => {
      if (user == '' || store_name == '' || description == '' || location == '' ){
        alert("Preencha todos os campos!");
      }
      else if (user.replace(/\s+/g, '') == "" || store_name.replace(/\s+/g, '') == "" || location.replace(/\s+/g, '') == ""){
        alert("Preencha os campos corretamente");
      }
      else{
        console.log(user)
      axios.post('/createStore', {
        userEmail: user,
        storename: store_name,
        about: description,
        location: location,
      })
      .then(function (response) {
        needStore()
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  };

  const additem = (itemName,descriptionItem, price, idstore) => {
    if (itemName == '' || descriptionItem == '' || price == ''){
      alert("Preencha todos os campos!");
    }
    else if (itemName.replace(/\s+/g, '') == "" || descriptionItem.replace(/\s+/g, '') == "" || price.replace(/\s+/g, '') == ""){
      alert("Preencha os campos corretamente");
    }
    else{
      console.log(idstore)
    axios.post('/additem', {
      itemName: itemName,
      descriptionItem: descriptionItem,
      price: price,
      idstores: idstore,
    })
    .then(function (response) {
      needStore()
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
};

/*
  const listItens = () => {
    return itens.map((element) => {
      return (
        <View key={element.idItems}>
          <ItemBox itemName = {element.name} descriptionItem = {element.description_item } price = {element.price}/>
        </View>
      );
    });
  };

  */

  if (hasStore == '') {
    return <StoreForm createStore={createStore}/>;
  }
    return(
        <Stack.Navigator>
          <Stack.Screen name="Itens" options={{ headerShown: false }}>
            {(props) => <ItemScreen item={itens}  />}
          </Stack.Screen>
          <Stack.Screen name="Additens" options={{ headerShown: false }}>
            {(props) => <AddItem additem={additem} />}
          </Stack.Screen>
        </Stack.Navigator>
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
  
