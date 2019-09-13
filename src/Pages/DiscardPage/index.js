import { Container, ContentsContainer, TextInputStyled, ButtonStyled, TextStyled } from './styles'
import { Text, Dimensions, StyleSheet} from 'react-native'
import PickerModal from 'react-native-picker-modal-view';

import React, { Component } from 'react';

const list = [
	{Id: 1, Name: 'Bateria', Value: 'Test1 Value'},
	{Id: 2, Name: 'Óleo', Value: 'Test2 Value'},
	{Id: 3, Name: 'Pilha', Value: 'Test3 Value'},
	{Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'}
]

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class example extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: {}
		}
	}

	selected(selected) {
		this.setState({
			selectedItem: selected
		})
	}

    render() {
        return (
          <Container>
    <ContentsContainer>
        <PickerModal
          onSelected={(selected) => this.selected(selected)}
          onClosed={()=> {}}
          onBackButtonPressed={()=> {}}
          items={list}
          sortingLanguage={'tr'}
          showToTopButton={true}
          defaultSelected={this.state.selectedItem}
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
          defaultValue= {0}
          autoCapitalize= 'none'
          style={styles.inputPlace}
          autoCorrect= {false}
          placeholder={'Quantidade...'}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ={'#ddd'}
          // value= {this.state.places.title}
          onChangeText= {(value) => {}}
          keyboardType= 'number-pad'
        />
        <ButtonStyled><TextStyled>Finalizar descarte</TextStyled></ButtonStyled>
      </ContentsContainer>
    </Container>
        )
    }
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
