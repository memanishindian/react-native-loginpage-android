import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';




export default class SignupForm extends React.Component{
    render() {
        return(
        
            
                    <View style = { styles.container }>
                        <TextInput
                            style = { styles.input }
                            placeholder = {'Full name'}
                            allowFontScaling = {true}
                            
                        />
                         <TextInput
                            style = { styles.input }
                            placeholder = {'Email Id'}
                           
                        />
                          <TextInput
                            style = { styles.input }
                            placeholder = {'password'}
                            secureTextEntry
                        />
                          <TextInput
                            style = { styles.input }
                            placeholder = {'confirm-password'}
                            secureTextEntry
                        />
                         <TextInput
                            style = { styles.input }
                            placeholder = {'Mobile Number'}
                            secureTextEntry
                        />
                        <TouchableOpacity style = {styles.signupbutton}>
                            <Text style = { styles.signuptext }>
                                SignUp
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
       backgroundColor : 'rgba(255, 255, 255, 0.3)', 
       height : 50,
       width : 300,
       color : 'white',
       fontSize : 20,
       fontWeight : '200',
       marginBottom : 30,
       paddingHorizontal : 10,
       borderRadius : 35,
       
    },
    signupbutton : {
        backgroundColor : '#e25a5a',
        width : 250,
        alignItems : 'center',
    },
    signuptext : {
        fontSize : 30,
        fontWeight : '700',
        paddingHorizontal : 10,
        paddingVertical : 10,
        color : '#fff',
       
    },

});