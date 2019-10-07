import Modal from 'react-native-modalbox'
import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { Container, TitleContainer, ConfirmButton, ViewRouteButton, 
  ButtonText, ButtonContainers, DialogText, ButtonContainer } from './styles';



export default class AddModal extends Component {
  constructor(props) {
    super(props);
  }

  getNextPlaceName = () => {
    if(this.props.placePermitted) {
      return this.props.placePermitted.name;
    }
    return 'Nenhum';
  }
  showAddModal = () => {
    this.refs.myModal.open();
  }

  closeModal = () => {
    this.refs.myModal.close();
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
          <DialogText>{this.getNextPlaceName()}</DialogText>
          <DialogText>Queres continuar?</DialogText>
        </TitleContainer>
        <ButtonContainers>
          <ButtonContainer>
            <ViewRouteButton onPress={this.props.viewRoutePress}>
              <ButtonText>Ver Rota</ButtonText>
            </ViewRouteButton>
          </ButtonContainer>
          <ButtonContainer>
            <ConfirmButton onPress={this.props.confirmButtonPress}>
              <ButtonText>Confirmar</ButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </ButtonContainers>
      </Container>
      </Modal>
    );
  }
}