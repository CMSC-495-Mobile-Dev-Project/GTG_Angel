import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Username = () => {

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255, 255, 255, 0.9)"
                style={styles.input}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10

    },
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

export default Username;