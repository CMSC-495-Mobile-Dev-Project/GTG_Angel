import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const LoginButton = () => {

    return(
      <View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
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