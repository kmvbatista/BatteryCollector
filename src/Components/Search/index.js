import React, { Component } from 'react'
import {View, TextInput, StyleSheet, Text } from 'react-native'
import { FlatList, ActivityIndicator, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { getPlacesArray } from '../../Services/LocalizationService'
import { Container, TextInputContainer, TextInputStyled, ListContainer, Item, ListItemContainer } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Search extends Component{
  constructor(props){
    super(props);
  }
  state={
    SearchedPlace: null,
    placesInMemory: null,
    isLoading: false
  }

  render() {
    const handleFindPlace = (value) => {
        this.state.SearchedPlace = value;
        const filteredPlaces = this.props.places.filter( 
          place => {
            let placeLowerCase = place.name.toLowerCase();
            let searchTermLowerCase = value.toLowerCase();
            return placeLowerCase.indexOf(searchTermLowerCase)> -1;
          }
        )
      this.setState({placesInMemory: filteredPlaces});
    }

    const getResults = () => {
      var places= this.state.placesInMemory;
      if(places){
        i = 0;
        let placesToShow = places.map(el => {return {key: `${el.name}`, index: i++}});
        return placesToShow;
      }
    }
    return (
      <Container>
        <TextInputContainer>
          <TextInputStyled
                      autoCapitalize= 'none'
                      style={styles.inputPlace}
                      autoCorrect= {false}
                      placeholder={'Escolha um local pra depositar'}
                      placeholderTextColor={'rgba(0,0,0, 0.7)'}
                      underlineColorAndroid ='transparent'
                      onChangeText= {(value) => handleFindPlace(value)}
                      />
        </TextInputContainer>
          
          <ListContainer >
            <FlatList
            contentContainerStyle={{ alignItems: "center", justifyContent: "space-between" }}
              data={getResults()}
              renderItem={({item}) => 
                <Item onPress={() => {
                  this.props.handleLocationSelected(item.index);
                  this.setState({placesInMemory: undefined})}}
                  underlayColor={"rgba(21, 219, 10, 1)"}
                >
                  <Text>{item.key}</Text>
                </Item>
}
              ListEmptyComponent= {() => 
               <Text style={{color: '#000'}}>Nada encontrado</Text>
              }
             >
          </FlatList>
         </ListContainer>
      </Container>
    );
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
    fontSize: 18
  }
})