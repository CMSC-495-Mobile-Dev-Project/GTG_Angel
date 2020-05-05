import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';

import SignupForm from './pages/SignupForm';    
import LoginForm from './pages/LoginForm';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
          title="Hit Me"
          onPress={() => navigation.navigate("Details")}
        />
    </View>
  );
}

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () =>{
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

export default App