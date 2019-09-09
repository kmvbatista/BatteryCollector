// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
// import ModalDropdown from 'react-native-modal-dropdown';
// import Container from './styles'

// const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

// export default class ModalExample extends Component {
//   state = {
//     dropdown_4_options: null,
//     dropdown_4_defaultValue: 'loading...',
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   _dropdown_4_onSelect(idx, value) {
//     // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
//     //alert(`idx=${idx}, value='${value}'`);
//     console.debug(`idx=${idx}, value='${value}'`);
//   }


//   _dropdown_4_willShow() {
//     setTimeout(() => this.setState({
//       dropdown_4_options: DEMO_OPTIONS_1,
//       dropdown_4_defaultValue: 'loaded',
//     }), 2000);
//   }

//   _dropdown_4_willHide() {
//     this.setState({
//       dropdown_4_options: null,
//       dropdown_4_defaultValue: 'loading',
//     });
//   }

//   render() {
//     return (
//       <Container>
//         <ModalDropdown style={styles.dropdown_4}
//           dropdownStyle={styles.dropdown_4_dropdown}
//           options={this.state.dropdown_4_options}
//           defaultIndex={-1}
//           defaultValue={this.state.dropdown_4_defaultValue}
//           onDropdownWillShow={this._dropdown_4_willShow.bind(this)}
//           onDropdownWillHide={this._dropdown_4_willHide.bind(this)}
//           onSelect={(idx, value) => this._dropdown_4_onSelect(idx, value)}
//         />

//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   dropdown_4: {
//     margin: 8,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     borderRadius: 1,
//   },
//   dropdown_4_dropdown: {
//     width: 100,
//   },

// });