import React, { Component } from 'react';
//import react in our project
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectTitle, Container, HeaderText, HeaderContainer } from './styles'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeSections: [],
    collapsed: false,
    CONTENT: this.props.asks
  };
  
  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };
 
  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={200}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <HeaderContainer>
          <HeaderText>{section.title}</HeaderText>
          <Icon style={{marginTop: 7}} name="keyboard-arrow-down" size={20} color="#fff"/>
        </HeaderContainer>
      </Animatable.View>
    );
  };
 
  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={200}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center', color: '#Fff', fontFamily: 'fantasy', fontSize: 18 }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
 
  render() {
    const { activeSections } = this.state;
    return (
      <View >
          <SelectTitle>
            Clique abaixo para aprender ;)
          </SelectTitle>
          <Accordion
            activeSections={activeSections}
            sections={this.state.CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  content: {
    padding: 20,
  },
  active: {
    backgroundColor: 'rgba(21, 150, 10, 1)'
  },
});