import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Signup extends React.Component{
    render(){
        return(
            <View style = { styles.container }>
                <View style = { styles.logoContainer } >
                    <Image source = { require('../../assets/rotaryLogo.png')} style = { styles.logo}/>
                </View>
                <Text  style = { styles.title } >
                    Rotary Club
                </Text>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#544a64',
        alignItems : 'center',
        justifyContent: 'center',

    },
    logoContainer : {
        overflow : 'hidden',
        borderRadius : 50,
        
    },
    logo : {
        height : 100,
        width : 200,
        resizeMode : 'stretch',
        borderWidth: 5,
        tintColor : '#fffb50',
        margin : 5,
    },
    title : {
        fontSize : 50,
        fontWeight : '200',
        opacity : 0.5,
        color : 'white',
    },
});