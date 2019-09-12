import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, Dimensions, TextInput, Alert, ActivityIndicator } from 'react-native';
import logo from '../../images/logo.png';

const {width : WIDTH} = Dimensions.get('window');

export default function MainLogin( { navigation } ) {
  return (
<KeyboardAvoidingView
            behavior='padding'>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>Battery Collector</Text>
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
                    <Text style={styles.buttonText}>sign</Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>

        );}

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