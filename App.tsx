import React, {useState}from 'react';
import axios from 'axios'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
  TextInput,
  Alert,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const baseUrl = 'https://api.signer.ai'

const Stack = createStackNavigator();

const onPress = () => {}

const Details = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}
const Login = ({navigation}) => {
  const [email,Setemail] = useState('')
  const [passwrd,Setpwd] = useState('')

  return(

    <View style={styles.full}>
    <Text style={styles.txt}>Login</Text>
      <View style={styles.container}>
        <TextInput style={styles.inputbox}
        onChangeText={Setemail}
        value={email}
        placeholder="Username"
        placeholderTextColor="#171817"
        autoFocus={true}
        />
      </View>
      <View style={styles.container2}>
        <TextInput style={styles.inputbox}
        onChangeText={Setpwd}
        value={passwrd}
        placeholder="Password"
        placeholderTextColor="#171817"
        autoFocus={true}
        secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.button}>Next</Text>
      </TouchableOpacity>

      <Text style={styles.txts}>Sign in with Google</Text>

      <Text style={styles.t2xt}>
        Don't have an account?
        <Text style={styles.bld}> Sign up</Text> 
      </Text>
      <Image style={styles.image} source={require('./assets/Frame5.1.png')} />

    </View>
  )
}


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         options={{headerShown: false}} 
         name="Login" 
         component={Login}
         ></Stack.Screen>
        <Stack.Screen
         name="Register" 
         component={Details}
         ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  button: {
    padding: 12,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    backgroundColor: 'black',
    width: '90%',
    height: 45,
    borderRadius: 15,
    marginLeft: 20,
    justifyContent: 'center'

  },
  bld: {
    fontWeight: 'bold',
    marginLeft: 20
  },
  touch: {
    color: 'black',
    textAlign: 'center'
  },
  container: {
    marginLeft: 20,
    padding: 15,
    width: '90%',
    height: 50,
    backgroundColor: "#E1EFD3",
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  container2: {
    marginLeft: 20,
    padding: 15,
    width: '90%',
    height: 50,
    backgroundColor: "#E1EFD3",
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 30
  },
  txt: {
    marginTop: 60,
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  t2xt: {
    marginTop: 30,
    marginLeft: 70,
    fontSize: 15,
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: '300'
  },
  full: {
    backgroundColor: '#E1EFD3',
    flex: 1
  },
  image: {
    marginTop: 50,
    width: 375,
    height: 140
  },
  txts: {
    paddingLeft: 90,
    marginTop: 20,
    fontWeight: '400',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginLeft: 20,
    width: '90%',
    height: 45,
    borderRadius: 15,
  }
});

export default App;
