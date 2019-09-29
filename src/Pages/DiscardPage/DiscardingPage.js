import React from 'react';
import { Container, ButtonStyled, TextInputStyled, TextStyled, Item, ListItemContainer, ContentsContainer } from './styles'
import {StyleSheet, Text, Dimensions} from 'react-native'
import PickerModal from 'react-native-picker-modal-view';
import DiscardingHeader from './DiscardingHeader'

const list = [
	{Id: 1, Name: 'Bateria'},
	{Id: 2, Name: 'Óleo'},
	{Id: 3, Name: 'Pilha'},
]

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


export default function DiscardingPage(props) {
  return (
    <ContentsContainer>
        <DiscardingHeader></DiscardingHeader>
        <PickerModal
          onSelected={(selected) => props.setSelected(selected)}
          onClosed={()=> {}}
          onBackButtonPressed={()=> {}}
          items={list}
          sortingLanguage={'tr'}
          showToTopButton={true}
          autoCorrect={false}
          autoGenerateAlphabet={true}
          onEndReached={() => {}}
          selectPlaceholderText={'Qual Material? :)'}
          searchPlaceholderText={'Procurar...'} 
          autoSort={true}
          disabled={false}
          style={{top: 80}}
          />
        <TextInputStyled
          blurOnSubmit = {true}
          autoCapitalize= 'none'
          style={styles.inputPlace}
          autoCorrect= {false}
          placeholder={'Quantidade...'}
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