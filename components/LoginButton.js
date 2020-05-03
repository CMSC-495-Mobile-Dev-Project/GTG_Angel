import React, {} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';

import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

const LoginButton = ({navigation}) => {


      return(
        <Button
          title="Log In"
          onPress={() => navigation.navigate("Home")}
        />
        // <View>
        //   <TouchableOpacity onPress style={styles.loginBtn}>
        //     <Text style={styles.loginText}>LOG IN</Text>
        //   </TouchableOpacity>
        // </View>
      )
  
}

const styles = StyleSheet.create({
    loginBtn:{
        width:300,
        backgroundColor:"#249924",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      },
      loginText:{
        fontWeight: '900',
        color:"white"
        
      }
})

export default LoginButton;