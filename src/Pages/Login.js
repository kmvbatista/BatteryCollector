import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, Dimensions, TextInput, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Api from '../Api'
import logo from '../../images/logo.png';
import AnimatedLoader from 'react-native-animated-loader'

// if (__DEV__) {
//   require('react-devtools');
// }
this.state={
  loggedInUser: null,
  errorMessage: null,
  token: null,
}
const {width : WIDTH} = Dimensions.get('window');

export default function Login( { navigation } ) {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  signIn = async() => {
    //const loggedIn= Json.Parse(await AsyncStorage.getItem('@BatteryCollector:user'));
    //const _token = await AsyncStorage.getItem('@BatteryCollector:token')
    // if(loggedI && token){
    //   this.setState({loggedInUser: loggedIn});
    //   this.setState({token: _token})
      navigation.navigate('Main');
    
    // try {
    //  const response = await Api.post('/api/token', {
    //    email:user,
    //    password:password
    //  });
    //  console.log(response);
    //  const _user= response.data.user;

    // //   await AsyncStorage.multiSet([
    // //     ['@BatteryCollector:token', response.data.token.value.token],
    // //     ['@BatteryCollector:user', JSON.stringify(response.data.user)]
    // //   ]);
    // //   this.setState({loggedInUser: _user});
    // Alert.alert(`Bem vindo, ${_user.name}`);
    // navigation.navigate('Main', {_user});
    // }
    //  catch(response) {
    //    Alert.alert(response);
    //  } 
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

                <View>
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
                </View>
                <View>
                  <TouchableOpacity onPress={handleSignUp} style={styles.button} placeholderTextColor='white'>
                    <Text>Cadastrar</Text>
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