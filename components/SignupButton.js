import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SignupButton = () => {

    return(
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    signupBtn:{
        width:300,
        backgroundColor:"#249924",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:-10,
        // marginBottom:-400
      },
      signupText:{
        color:"white"
      }
})

export default SignupButton;