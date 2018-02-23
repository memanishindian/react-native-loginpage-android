import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, AppRegistry } from 'react-native';




import Login from './components/login/Login';
import LoginForm from './components/login/LoginForm';

//import Signup from './components/signup/Signup';
import SignupForm from './components/signup/SignupForm';



export default class App extends React.Component {
  render() {
    var list = [
        <Login/>,
        <KeyboardAvoidingView>
            <SignupForm/>
        </KeyboardAvoidingView>,
        <Text>
            Manish
        </Text>
      ];
    return (
     
            <View style={styles.container}>
                {list}
            </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content : {
    backgroundColor : 'blue',
    
    opacity : 0.9,
  },
});
