import React from 'react'
import { Container, DataText, DataTitle } from './styles'

export default function UserData() {
  return(
    <Container>
      <DataTitle>Mês de maior contribuição: </DataTitle>
      <DataText> Outubro</DataText>
      <DataTitle> Material mais descartado: </DataTitle>
      <DataText>Pilhas</DataText>
      <DataTitle>Local mais frequente: </DataTitle>
      <DataText>Furb</DataText>
    </Container>
  );
          
}