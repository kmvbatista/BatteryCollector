import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, 
  Image, Dimensions, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../Api'
import logo from '../../images/logo.png';
import AnimatedLoader from 'react-native-animated-loader'

if (__DEV__) {
  require('react-devtools');
}
const {width : WIDTH} = Dimensions.get('window');

export default function Login( { navigation } ) {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  let [userLogged, setuserLogged] = useState('');
  let [tokenActive, setToken] = useState('');

  const getUserLoggedStorage = async () => {
    let userFound= await AsyncStorage.getItem('@BatteryCollector:user');
     if(userFound) {
      userFound = JSON.parse(userFound);
      userLogged = userFound;
     }
  }

  const getTokenStorage = async () => {
    const tokenFound = await AsyncStorage.getItem('@BatteryCollector:token');
    if(tokenFound) {
      tokenActive = tokenFound;
    }
  }
  
  const MultisetStorage = async (logIn, token) => {
    await AsyncStorage.multiSet([
      ['@BatteryCollector:token', token],
      ['@BatteryCollector:user', JSON.stringify(logIn)]
    ]);
  }

  const verifyUserLogged = async () => {
    await getUserLoggedStorage();
    await getTokenStorage();
    if(userLogged && tokenActive) {
      return true;
    }
  }

  const signIn = async () => {
    if(/*await verifyUserLogged()*/false) {
      navigation.navigate('Main');
    }
    else{
      try {
        const response = await Api.post('/api/token', {
          email:user,
          password:password
        });
        MultisetStorage( response.data.user, response.data.token.value.token);
        Alert.alert(`Bem vindo, ${user}`);
        navigation.navigate('Main', {user});
      }
      catch(error) {
        console.error();
      } 
    }
  }
  
  const toggleLoader = () => {
    this.setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <View  style={styles.backgroundContainer}>
      {isLoading &&(
        <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)'  animationStyle={styles.lottie}
          speed={1}  source={require("../Components/4.json")}></AnimatedLoader>)}
      {toggleLoader()}
      { !isLoading &&(
      <>  
        <KeyboardAvoidingView
            behavior='padding'>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>Turn IT Greener</Text>
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
                </View>

                <View style={{margin: 'auto'}}>
                    <TextInput
                        style={styles.inputPassword}
                        autoCapitalize= 'none'
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(0,0,0, 0.7)'}
                        underlineColorAndroid ='transparent'
                        value= {password}
                        onChangeText= {setPassword}
                        autoCorrect={false}
                    />
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity onPress={signIn} placeholderTextColor='white' style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignUp} style={styles.button2} placeholderTextColor='#fff'>
                    <Text style={styles.buttonText}>Cadastre-se</Text>
                  </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
      </>)}
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
    fontSize: 27,
    fontWeight:'500',
    marginBottom: 150
  },
  inputUsername: {
    width: WIDTH-80,
    height: 50,
    borderRadius: 54,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'rgba(0,0,0,1)',
    fontSize: 16, 
    marginBottom:7,
    textAlign:"center",
    justifyContent:"center"
  },
  inputPassword: {
    width: WIDTH-80,
    height: 50,
    borderRadius: 54,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'rgba(0,0,0,1)',
    fontSize: 16, 
    marginBottom:20,
    textAlign:"center",
    justifyContent:"center"
    }, 
  button: {
      backgroundColor: 'rgba(0,0,0,0.95)',
      width: WIDTH-80,
      height: 50,
      borderRadius: 40,
      fontSize: 30, 
      paddingLeft:100,
      paddingRight:100,
      marginBottom:20,
      justifyContent: 'center',
      alignItems: "center",
      alignSelf: "stretch"
  },
  button2: {
    backgroundColor: 'rgba(2,2,2,0.95)',
    width: WIDTH-60,
    height: 50,
    borderRadius: 10,
    fontSize: 30, 
    paddingLeft:100,
    paddingRight:100,
    justifyContent: 'center',
    alignItems: "center",
},
  buttonText: {
    color: 'white',
  }

});