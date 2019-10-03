import Modal from 'react-native-modalbox'
import React, { Component, createRef } from 'react'
import {View, Text} from 'react-native'
import { Container, TitleContainer, ConfirmButton, ViewRouteButton, 
  ButtonText, ButtonContainers, DialogText, ButtonContainer } from './styles';



export default class AddModal extends Component {
  constructor(props) {
    super(props);
  }

  getNextPlaceName = () => {
    const placePermitted = this.props.placePermitted;
    if(placePermitted) {
      return placePermitted.title;
    }
    return 'Nenhum';
  }
  showAddModal = () => {
    this.refs.myModal.open();
    debugger;
  }
  render() {
    return (
      <Modal
        ref={'myModal'}
        style={{
          justifyContent: "center",
          borderRadius: 30,
          shadowRadius: 10,
          width: 300,
          height: 280
          }}
          position = 'center'
          backdrop={true}
      >
      <Container>
        <TitleContainer>
          <DialogText>O local mais próximo é {this.getNextPlaceName()}</DialogText>
          <DialogText>Queres continuar?</DialogText>
        </TitleContainer>
        <ButtonContainers>
          <ButtonContainer>
            <ViewRouteButton onPress={this.props.viewRoutePress}>
              <ButtonText>Ver Rota</ButtonText>
            </ViewRouteButton>
          </ButtonContainer>
          <ButtonContainer>
            <ConfirmButton onPress={this.props.confirmPress}>
              <ButtonText>Confirmar</ButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </ButtonContainers>
      </Container>
      </Modal>
    );
  }
}