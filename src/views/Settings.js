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
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import StoreBox from '../components/StoreBox';


export default function Settings(props) {
    const navigation = useNavigation();
    const user = auth().currentUser;
    
    
    return (
        <View style={styles.screen}> 
            <Text>{user.email}</Text>
            <Button color="#AE7A14"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
            <Button color="#AE7A14"
                title="Signout" onPress={() => auth().signOut()} 
      />

        </View>
    );
  }


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
    },
  });
