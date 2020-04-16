import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

import Form from '../components/Form';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

const Login = () => {

    return(
        <View style={styles.container}>
            <Form />
            <LoginButton />
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                <TouchableOpacity >
                      <Text style={styles.signupButton}>  Sign Up</Text>
                </TouchableOpacity>
            </View>
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
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -250,
        flexDirection: 'row'
    },
    signupText: {
        color:'rgba(255, 255, 255, 0.7)',
        fontSize: 14
    },
    signupButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '500'
    }

})

export default Login;