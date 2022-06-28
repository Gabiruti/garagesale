import React, {useState, Component} from 'react';
import { StyleSheet, 
    TextInput,
    ScrollView, 
    SafeAreaView, 
    Button, 
    Alert, 
    View, 
    Text, 
    Image,
    TouchableOpacity,
    Form
} from 'react-native';
import { useNavigation } from '@react-navigation/native';    

export default function Register(props) {

    const navigation = useNavigation();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordconfirm] = useState('');



    return (
        <ScrollView>
    <SafeAreaView style={styles.container}>
        <Text style={styles.smalltxt}>E-mail:</Text>
        <TextInput style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType="email-address"/>
        <Text style={styles.smalltxt}>Senha:</Text>
            <TextInput 
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}/>
        <Text style={styles.smalltxt}>Confime sua senha:</Text>
            <TextInput 
                style={styles.input}
                value={passwordconfirm}
                onChangeText={setPasswordconfirm}
                placeholder="Confirme sua Senha"
                keyboardType="default"
                secureTextEntry={true}/>
            <View>
                <TouchableOpacity style={styles.buttom} onPress={() => {props.createUser(email, password, passwordconfirm); /*navigation.goBack()*/}}>
                    <Text style={styles.buttomtxt}>registrar</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
    </ScrollView>
)
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,

    },
    
    input: {
        marginTop: 5,
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
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 160
    },
    smalltxt: {
        fontFamily: 'Red Rose',
        fontStyle: 'normal',
        fontSize: 16,
        marginTop: 30,
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

})

