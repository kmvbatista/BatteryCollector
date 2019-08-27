import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import AsyncStorage from 'AsyncStorage'

import api from '../Api'

import Icon from 'react-native-vector-icons/Octicons';
import logo from '../../images/logo.png'

const {width : WIDTH} = Dimensions.get('window');
export default function Login( { navigation } ) {
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

      useEffect(() => {
       AsyncStorage.getItem('user').then(user => {
        if(user) {
            navigation.navigate('Main', {user});
        }
    });
}, []);

    async function handleLogin() {
        
        await AsyncStorage.setItem('user', user);
    }

  return (
    <View  style={styles.backgroundContainer}>
    
        <KeyboardAvoidingView
            behavior='padding'>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>Battery Collector tr</Text>
                </View>

                <View>
                    <TextInput
                    autoCapitalize= 'none'
                    style={styles.inputUsername}
                    autoCorrect= {false}
                    placeholder={'Username'}
                    placeholderTextColor={'rgba(0,0,0, 0.7)'}
                    underlineColorAndroid ='transparent'
                    value= {user}
                    onChangeText= {setUser}
                    />
                    <Icon name={'person'} size={28} color='rgba(0, 0, 0 , 1)' style={styles.personIcon}></Icon>
                </View>

                <View>
                    <TextInput
                    style={styles.inputPassword}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(0,0,0, 0.7)'}
                        underlineColorAndroid ='transparent'
                        value= {password}
                        onChangeText= {setPassword}
                    />
                    <Icon name={'key'} size={28} color='rgba(0, 0, 0 , 1)' style={styles.keyIcon}></Icon>
                    <TouchableOpacity>
                    <Icon name={'eye'} size={28} color='rgba(0, 0, 0 , 1)' style={styles.eyeIcon}></Icon>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity onPress={handleLogin} placeholderTextColor='white' style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex:1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(21, 219, 10, 1)'
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems:'center'
  },
  logoText : {
    color: 'white',
    fontSize: 20,
    fontWeight:'500',
    marginBottom: 150
  },
  inputUsername: {
    width: WIDTH-80,
    height: 50,
    borderRadius: 54,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'rgba(255,255,255,1)',
    fontSize: 16, 
    paddingLeft:100,
    marginBottom:7
  },
  inputPassword: {
    width: WIDTH-80,
    height: 50,
    borderRadius: 54,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'rgba(0,0,0,1)',
    fontSize: 16, 
    paddingLeft:100,
    marginBottom:20
  }, 
  personIcon : {
    position: "absolute",
    top: 10,
    left:20 
  },
  keyIcon : {
    position: "absolute",
    bottom: 27,
    left:20
  },
  eyeIcon : {
    position: "absolute",
    bottom: 27,
    right:20
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.95)',
    width: WIDTH-80,
    height: 50,
    borderRadius: 40,
    fontSize: 30, 
    paddingLeft:100,
    paddingRight:100,
    marginBottom:70,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "stretch"
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: "center",
    fontWeight: "bold"
  }

});