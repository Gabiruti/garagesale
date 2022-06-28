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
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function AddItem(props) {


    const navigation = useNavigation();


    const [itemName, setItemName] = useState('');
    const [descriptionItem, setDescriptionItem] = useState('');
    const [price, setPrice] = useState('')
    const [id_store, setIdStore]= useState('') 

    const usera = auth().currentUser;

    const getIdStore = async () => {
        const resp = await fetch("http://127.0.0.1:8080/getidstore?user=" + usera.email);
        const data = await resp.json();
        setIdStore(data[0]["idstores"]);
        console.log(data[0]["idstores"]);
        //setLoading(false);
        };

    useEffect(() => {
        getIdStore();
        }, []); 





    return(
      <ScrollView>
      <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Preencha os campos para adicionar um item!</Text>
            <TextInput style={styles.input}
                value={itemName}
                onChangeText={setItemName}
                placeholder="Nome do Item"
                keyboardType="default"/>
          <TextInput style={styles.input}
                value={descriptionItem}
                onChangeText={setDescriptionItem}
                placeholder="Descrição"
                keyboardType="default"/>
          <TextInput style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="preço"
                keyboardType="numeric"/>
                <View style={styles.buttomFlex}>
                <TouchableOpacity style={styles.buttom} onPress={() => {props.additem(itemName,descriptionItem, price, id_store);
                navigation.navigate('Itens');}}>
                    <Text style={styles.buttomtxt}>Add Item</Text>
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
  
