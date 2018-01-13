import React from 'react';
import {
  StyleSheet
} from 'react-native';

//Change Styles to use in all files need import!!!

export default StyleSheet.create({

    containerForm:{
        flex:1,
        padding: 20,
        backgroundColor: 'transparent'
    },

    logoContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    wordLogoContainer:{
        fontSize: 25
    },

    loginForm:{
        flex: 2
    },

    styleTextInputLogin:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    buttonLogin:{
        flex: 2,
        justifyContent: 'space-between',
        paddingTop: 15,
        backgroundColor: 'transparent',
    }




    

})    