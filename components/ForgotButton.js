import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ForgotButton = () => {

    return(
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    forgot:{
        color:"white",
        fontSize:14,
        marginTop:400
      },
})

export default ForgotButton;