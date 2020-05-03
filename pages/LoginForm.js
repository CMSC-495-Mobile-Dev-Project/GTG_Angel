import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, ImageBackground, Button} from 'react-native';

import Form from '../components/Form';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import Icon from 'react-native-vector-icons/Ionicons';

const userInfo = {username: 'admin', password: 'password'}

const LoginForm = ({navigation}) =>  {  

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
    // }


        return(
            <ImageBackground source={require('../assets/background.png')}
                            style={styles.container}>
                <Text style={styles.logo}> Grocery To Go</Text>
                <View style={styles.container}>
                    {/* <Form /> */}
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="rgba(255, 255, 255, 0.9)"
                        style={styles.input}
                        // onChangeText={(username)=>this.setState({username})}
                        // value={this.state.username}
                        />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.9)"
                        secureTextEntry 
                        style={styles.input}
                        // onChangeText={(password)=>this.setState({password})}
                        // value={this.state.password}
                        />
                    {/* <LoginButton /> */}
                    <Button
                    title="Log In"
                    onPress={() => navigation.navigate("Home")}
                    />
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Don't have an account yet?</Text>
                        <TouchableOpacity >
                            <Text style={styles.signupButton}>  Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
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
        marginBottom: 550,
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
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        marginTop: 10,
        color: '#FFF',
        paddingHorizontal: 10
        
    },
    logo:{
        fontWeight:"bold",
        fontFamily: 'sans-serif-light',
        fontSize:40,
        color:"#fff",
        justifyContent: 'center',
        marginTop:400,
        marginBottom: 100
      }

})

export default LoginForm;