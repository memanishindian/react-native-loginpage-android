import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';




export default class LoginForm extends React.Component{
    render() {
        return(
            
                    <View style = { styles.container }>
                        <TextInput
                            style = { styles.input }
                            placeholder = {'Email or username'}
                            allowFontScaling = {true}
                            
                        />

                        <TextInput
                            style = { styles.input }
                            placeholder = {'password'}
                            secureTextEntry
                        />
                        <TouchableOpacity style = {{  backgroundColor : '#e25a5a' }}>
                            <Text style = { styles.login }>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
        );
    }

}





const styles = StyleSheet.create({
    container : {
        backgroundColor : '#544a64',
        alignItems : 'center',
        padding : 20,
    },
    input : {
       backgroundColor : '#544a60', 
       height : 50,
       width : 300,
       color : 'white',
       fontSize : 25,
       fontWeight : '200',
       marginBottom : 15,
       paddingHorizontal : 10,
    },
    login : {
        fontSize : 30,
        fontWeight : '700',
        paddingHorizontal : 10,
        paddingVertical : 10,
        color : '#fff',
    },

});