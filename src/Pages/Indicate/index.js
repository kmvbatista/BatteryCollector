import React, {useState, useEffect} from 'react';
import { Container, ButtonStyled, TextInputStyled, TextStyled,
   ContentsContainer, RadioButtonContainer } from './styles'
import {StyleSheet, BackHandler, Dimensions, 
  KeyboardAvoidingView, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import RadioButton from '../../Components/RadioButton';
import Header from '../../Components/Header/index';
import Api from '../../Services/Api'
import headerLogo from '../../../images/email.png'

const list = [
	{Id: 1, Name: 'Bateria', Value: 'Test1 Value'},
	{Id: 2, Name: 'Óleo', Value: 'Test2 Value'},
	{Id: 3, Name: 'Pilha', Value: 'Test3 Value'},
	{Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'}
]

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function Indicate({navigation}) {
  useEffect( () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      handlebackPress
    );
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handlebackPress);
  })  

  function handlebackPress(){
      return navigation.navigate('Main');
  }

  let [selected, setSelected] = useState('Local');
  let [descriptionSelected, setDescSelected] = useState('Material');
  const [featureText, setFeatureText] = useState();
  const [description, setDescription] = useState();
  const [adress, setAdress] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleRadioButton = (data) => {
    setSelected(data.label);
    setDescSelected(selected == 'Material' ? 'Material relacionado' : 'Tipo material');
  }

  const handleSendEmail = async () => {
    try {
      setIsLoading(true);
      const materialToSend = selected == 'Material' ? featureText : undefined;
      const localToSend = selected == 'Local' ? featureText : undefined;
      const userFound = JSON.parse(await AsyncStorage.getItem('@BatteryCollector:user'));
      const dataToSend = {
        sender: userFound,
        material: materialToSend,
        local: localToSend,
        address: adress,
        description: description
      }
      debugger;
      Api().post('/api/featurehint', dataToSend).then( (response) => {
        if(response.status >=400) {
          setIsLoading(false);
          alert('Não foi possível enviar. Tente mais tarde');
        }
        else  {
          setIsLoading(false);
          handleSendSuccess();
        }
      }) 
    }
    catch(err){
      console.log(err)
      alert('Tente novamente mais tarde');
    }
  }

  const handleSendSuccess = () => {
    setDescription('');
    setFeatureText('');
    setAdress('');
    alert('Email enviado com sucesso!');
  }
  return (
    
      <Container>
        <ContentsContainer>
          {isLoading &&(
          <ActivityIndicator
            size="large"
            color="#000"
          ></ActivityIndicator>)}
          
          <KeyboardAvoidingView
            behavior='padding'>

            <Header 
              Text1={`O que falta nesse app ?`}
              logo={headerLogo}
            ></Header>

            <RadioButtonContainer>
              <RadioButton handleRadioButton={handleRadioButton}>
              </RadioButton>
            </RadioButtonContainer>

            <TextInputStyled
              blurOnSubmit = {true}
              autoCapitalize= 'sentences'
              style={styles.inputPlace}
              autoCorrect= {false}
              placeholder={selected}
              placeholderTextColor={'rgba(0,0,0, 0.7)'}
              underlineColorAndroid ={'#ddd'}
              // value= {this.state.places.title}
              onChangeText={(value) => setFeatureText(value)}

            />
            <TextInputStyled
              blurOnSubmit = {true}
              autoCapitalize= "sentences"
              style={styles.inputPlace}
              autoCorrect= {false}
              placeholder={descriptionSelected}
              placeholderTextColor={'rgba(0,0,0, 0.7)'}
              underlineColorAndroid ={'#ddd'}
              onChangeText={(value) => setDescription(value)}
            />
            {selected=='Local' && (<TextInputStyled
              blurOnSubmit = {true}
              autoCapitalize= "sentences"
              style={styles.inputPlace}
              autoCorrect= {false}
              placeholder={'Endereço'}
              placeholderTextColor={'rgba(0,0,0, 0.7)'}
              underlineColorAndroid ={'#ddd'}
              onChangeText={(value) => setAdress(value)}
            />)}
            <ButtonStyled
              onPress={handleSendEmail}
            ><TextStyled>Enviar agora</TextStyled></ButtonStyled>
          </KeyboardAvoidingView> 
        </ContentsContainer>
      </Container>
  );
}
const styles = StyleSheet.create({
  inputPlace: {
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    backgroundColor: 'rgba(255,255,255,1)',
    color: 'rgba(0,0,0,1)',
  }
})