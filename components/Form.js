import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

import LoginButton from '../components/LoginButton';
import UsernameForm from '../components/UsernameForm';
import SignupButton from '../components/SignupButton';
import Username from '../components/UsernameForm';

const Form = () => {

    return(
        <View>
            <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255, 255, 255, 0.9)"
                style={styles.input}
                />
            <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.9)"
                secureTextEntry 
                style={styles.input}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        marginTop: 10,
        color: '#FFF',
        paddingHorizontal: 10
        
    }

})

export default Form;