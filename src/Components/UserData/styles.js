import styled from 'styled-components/native';

export const DataText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const DataTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const MonthDataBox = styled.View`
  display: flex;
  flex: 1;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const MonthDataContainer = styled.View`
  display: flex;
  flex: 0.6;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
`;

export const ContainerAlignCenter = styled.View`
  align-items: center;
  flex: 1;

`;

export const YearDataContainer = styled.View`
  flex: 1.4;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const YearDataBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const OverallDataContainer = styled.View`
  display: flex;
  flex: 1;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
`;

export const HeaderStrap = styled.View`
  align-items: center;
  align-self: stretch;
  justify-content: center;
  background-color: #000;
  width: 100%;
`;