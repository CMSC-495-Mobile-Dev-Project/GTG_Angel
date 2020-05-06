import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'

import SignupForm from './pages/SignupForm';    
import LoginForm from './pages/LoginForm';

class HomeScreen extends Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> GTG Home Screen </Text>
        <Button
            title="Hit Me"
            onPress={() => this.props.navigation.navigate("Details")}
          />
      </View>
    );
  }
}

const Stack = createStackNavigator();

type Props ={}; 

export default class App extends Component<Props>{
  render(){
    return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Signup" component={SignupForm} />
              </Stack.Navigator>
            </NavigationContainer>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontFamily: 'sans-serif-light',
    fontSize:40,
    color:"#fff",
    justifyContent: 'center',
    marginTop:500,
    marginBottom: 100
  },
});

// export default App