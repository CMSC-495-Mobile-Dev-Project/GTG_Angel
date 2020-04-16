import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const CredsInput = () => {

    return(
        <View style={styles.container}>
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
            <LoginButton />
            <SignupButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10

    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
        
    }

})

export default CredsInput;