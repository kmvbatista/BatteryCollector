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

const CONTENT = [
  {
    title: 'Terms and Conditions',
    content:
      'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
  },
  {
    title: 'Privacy Policy',
    content:
      'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
  },
  {
    title: 'Return Policy',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
];
 
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeSections: [],
    collapsed: false,
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
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={200}
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