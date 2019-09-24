import React, {useState} from 'react';
import { Container, ButtonStyled, TextInputStyled, TextStyled, 
  Item, ListItemContainer, ContentsContainer, RadioButtonContainer } from './styles'
import {StyleSheet, Text, Dimensions} from 'react-native'
import PickerModal from 'react-native-picker-modal-view';
import RadioButton from '../../Components/RadioButton';
import Header from '../../Components/Header/index';

const list = [
	{Id: 1, Name: 'Bateria', Value: 'Test1 Value'},
	{Id: 2, Name: 'Óleo', Value: 'Test2 Value'},
	{Id: 3, Name: 'Pilha', Value: 'Test3 Value'},
	{Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'}
]

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


export default function DiscardingPage(props) {

  let [selected, setSelected] = useState('Insira um Local');
  let [descriptionSelected, setDescSelected] = useState('Material relacionado');

  const handleRadioButton = (data) => {
    debugger;
    setSelected(data.label);
    setDescSelected(selected == 'Material' ? 'Material relacionado' : 'Tipo material');
  }
  return (
      <Container>
        <ContentsContainer>

          <Header Text={`O que falta nesse app ?`}></Header>

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
            onChangeText={(value) => props.setQuantity(value)}

          />
          <TextInputStyled
            blurOnSubmit = {true}
            autoCapitalize= "sentences"
            style={styles.inputPlace}
            autoCorrect= {false}
            placeholder={descriptionSelected}
            placeholderTextColor={'rgba(0,0,0, 0.7)'}
            underlineColorAndroid ={'#ddd'}
            // value= {this.state.places.title}
            keyboardType= 'number-pad'
            onChangeText={(value) => props.setQuantity(value)}
          />
          <ButtonStyled
            onPress={props.handleDiscardPress}
          ><TextStyled>Finalizar descarte</TextStyled></ButtonStyled>
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