
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButton(props){
  state = {
    data: [
      {
        value: 'local',
        color: '#fff',
        label: 'Local',

      },
     
      {
        value: 'material',
        color: '#fff',
        label: 'Material',
      }

    ],
  };

  // update state
    onPress = data => {
      const [selected] = data.filter(x => x.selected);
      props.handleRadioButton(selected);

    }

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <View style= {styles.container}>
        <RadioGroup radioButtons={this.state.data}  onPress={this.onPress} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});