import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import style from '../../style/Style';


export default props => (
    <View style={style.containerForm}>
        <View style={style.logoContainer}>
            <Text style={style.wordLogoContainer}>Whatsapp - Clone</Text>
        </View>

        <View style={style.loginForm}>
            <TextInput style={style.styleTextInputLogin} placeholder='Email'/>
            <TextInput style={style.styleTextInputLogin} placeholder='Password'/>
            <Text>You don't have one account, please Click Here!</Text>
        </View>

        <View style={style.buttonLogin}>
            <Button title='Login' onPress={() => {false}}/>
        </View>


    </View>
)