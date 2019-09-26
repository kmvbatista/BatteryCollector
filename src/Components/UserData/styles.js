import styled from 'styled-components/native';

export const DataText = styled.Text`
  font-size: 11px;
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
  flex: 1;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
`;

export const YearDataContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
`;

export const YearDataBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const OverallDataContainer = styled.View`
  display: flex;
  flex: 1;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  border-bottom-color: #ddd;
  border-bottom-width: 2px;
`;