import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

import Form from '../components/Form';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

const SignupForm = () => {

    return(
        <View style={styles.container}>            
            <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255, 255, 255, 0.9)"
                style={styles.input}
                />
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
            <SignupButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 10
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
        
    }

})

export default SignupForm;